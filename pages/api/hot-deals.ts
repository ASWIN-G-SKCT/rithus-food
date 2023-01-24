import { db } from "@/firebase/index";
import { FirebaseError } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { HotDeal } from "interfaces/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "hot_deals"));
      const documents = querySnapshot.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));
      console.count("API HIT, /api/hot_deals");
      res.status(200).json(documents as HotDeal[]);
    } catch (error) {
      res.status(500).json(error as FirebaseError);
    }
  }
}
