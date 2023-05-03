import { publicProcedure, router } from "src/server/trpc";
import { firestore } from "src/server/config";
import { getDocs, collection } from "firebase/firestore";

//Create your collection in Firestore
let sampleCollection = collection(firestore, "sample");

export const sampleGET = router({
  getSample: publicProcedure.query(async () => {
    const users: Users[] = [];
    await getDocs(sampleCollection).then((response) => {
      response.forEach((doc) => {
        const data = doc.data();
        users.push({
          id: doc.id,
          email: data.email,
          password: data.password,
        });
      });
    });
    return { users };
  }),
});
