import * as trpcNext from "@trpc/server/adapters/next";
import { publicProcedure, router } from "src/server/trpc";
import { firestore } from "src/server/config";
import { z } from "zod";
import { getDocs, collection, addDoc } from "firebase/firestore";

//Create your collection in Firestore
let sampleCollection = collection(firestore, "sample");

const appRouter = router({
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

  postSample: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(({ input }) => {
      let user = {
        email: input.email,
        password: input.password,
      };

      addDoc(sampleCollection, user);
      return { user };
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
