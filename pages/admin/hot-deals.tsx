import { db, storage } from "@/firebase/index";
import HotDealBanner from "components/hot_deals/HotDealBanner";
import { addDoc, collection, doc, loadBundle } from "firebase/firestore";
import {
  UploadResult,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import useFetchHotDeals from "hooks/useGetHotDeals";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type HotDealsFormInputs = {
  image: FileList | undefined;
  title: string;
};

const HotDeals = () => {
  const { register, handleSubmit } = useForm<HotDealsFormInputs>();
  const { error, hotDeals, isLoading } = useFetchHotDeals();

  const onSubmit: SubmitHandler<HotDealsFormInputs> = async (data) => {
    let upload;

    const image = await Promise.all(
      Array.from(data.image as FileList).map(async (file) => {
        upload = await uploadBytes(
          ref(storage, "hot_deals/" + file.name),
          file
        );

        return getDownloadURL(upload.ref);
      })
    );

    console.log("Uploaded");

    const docRef = collection(db, "hot_deals", data.title);

    await addDoc(docRef, {
      image,
      title: data.title,
    });

    alert("Uploaded");
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Ongoing Deals</p>
        {hotDeals?.map((deal) => (
          <HotDealBanner key={deal._id} hotDeal={deal} />
        ))}
      </div>
      <input type={"text"} {...register("title")} />
      <input type={"file"} multiple={false} {...register("image")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HotDeals;
