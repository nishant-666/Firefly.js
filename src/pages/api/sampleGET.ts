// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "src/server/config";
import { getDocs, collection } from "firebase/firestore";

//Create your collection in Firestore
let sampleCollection = collection(firestore, "sample");

const sampleGETAPI = (req: NextApiRequest, res: NextApiResponse<Users[]>) => {
  getDocs(sampleCollection).then((response) => {
    const users: Users[] = [];
    response.forEach((doc) => {
      const data = doc.data();
      users.push({
        id: doc.id,
        email: data.email,
        password: data.password,
      });
    });

    res.status(200).json(users);
  });
};

export default sampleGETAPI;
