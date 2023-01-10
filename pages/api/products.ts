// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "interfaces/types";
import { db } from "@/firebase/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    const querySnapshot = await getDocs(collection(db, "products"));
    const documents = querySnapshot.docs.map((doc) => ({
      _id: doc.id,
      ...doc.data(),
    }));
    console.count("API HIT, /api/products");
    res.status(200).json(documents as Product[]);
  }
}

//TODO: Type this Handler
