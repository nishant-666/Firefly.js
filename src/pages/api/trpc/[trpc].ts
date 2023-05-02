import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { publicProcedure, router } from "src/server/trpc";

const appRouter = router({
  greeting: publicProcedure
    // This is the input schema of your procedure
    // 💡 Tip: Try changing this and see type errors on the client straight away
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(() => {
      // This is what you're returning to your client
      return {
        text: `Hello World`,
        // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
      };
    }),

  getUser: publicProcedure.query(() => {
    return { id: "1", name: "Nishant" };
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
