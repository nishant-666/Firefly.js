import { firestore } from "src/server/config";
import type { NextApiRequest, NextApiResponse } from "next";
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

interface User {
  id: string;
  name: string;
  email: string;
}

export function sampleGetReq() {
  onSnapshot(
    sampleRef,
    (response) => {
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      });
    },
    (error) => {
      console.error(error);
    }
  );
}
