// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "src/server/config";
import { onSnapshot, collection } from "firebase/firestore";

interface Users {
  id: string;
  sampleField: string;
}

let sampleCollection = collection(firestore, "sample");

export default function sampleGETAPI(
  req: NextApiRequest,
  res: NextApiResponse<Users[]>
) {
  onSnapshot(sampleCollection, (response) => {
    const users: Users[] = [];
    response.forEach((doc) => {
      const data = doc.data();
      users.push({
        id: doc.id,
        sampleField: data.sampleField,
      });
    });

    res.status(200).json(users);
  });
}
