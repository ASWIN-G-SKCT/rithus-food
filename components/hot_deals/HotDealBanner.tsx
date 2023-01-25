import React, { FC } from "react";
import { HotDeal } from "interfaces/types";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { AuthState } from "store/features/userSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/index";

type HotDealBannerProps = {
  hotDeal: HotDeal;
};

const HotDealBanner: FC<HotDealBannerProps> = ({ hotDeal }) => {
  const { user } = useSelector<RootState, AuthState>((state) => state.auth);

  const onDeleteDeal = async () => {
    await deleteDoc(doc(db, "hot_deals", hotDeal._id));
    alert("Shut Down");
  };

  return (
    <div>
      {hotDeal.title}
      <Image
        src={hotDeal.image[0]}
        width={500}
        height={200}
        alt={hotDeal.title}
      />

      {user?.admin && (
        <button type="button" onClick={() => onDeleteDeal()}>
          Shut Down Deal
        </button>
      )}
    </div>
  );
};

export default HotDealBanner;
