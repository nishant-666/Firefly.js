// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "src/server/config";
import { addDoc, collection } from "firebase/firestore";

//Create your collection in Firestore
let sampleCollection = collection(firestore, "sample");

const samplePOSTAPI = (req: NextApiRequest, res: NextApiResponse<Users>) => {
  let email = req.body.email;
  let password = req.body.password;

  let user = {
    email: email,
    password: password,
  };

  addDoc(sampleCollection, user);

  res.status(200).json(user);
};

export default samplePOSTAPI;
