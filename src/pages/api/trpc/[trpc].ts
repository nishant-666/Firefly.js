import { router } from "src/server/trpc";
import { sampleGET } from "./routers/sampleGET";
import { samplePOST } from "./routers/samplePOST";
import * as trpcNext from "@trpc/server/adapters/next";

/**
 * This is the primary router for your server.
 *
 * All routers added in /routers should be manually added here.
 */
export const appRouter = router({
  sampleGETAPI: sampleGET,
  samplePOSTAPI: samplePOST,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
