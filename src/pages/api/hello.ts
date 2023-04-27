// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "src/server/config";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

let sampleRef = collection(firestore, "users");

interface User {
  id: string;
  name: string;
  email: string;
  imageLink: string;
  userID: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  onSnapshot(
    sampleRef,
    (response) => {
      const users: User[] = [];
      response.forEach((doc) => {
        const data = doc.data();
        users.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          imageLink: data.imageLink,
          userID: data.userID,
        });
      });

      res.status(200).json(users);
    },
    (error) => {
      console.error(error);
    }
  );
}
