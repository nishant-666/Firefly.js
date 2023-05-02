import { useSession, signIn, signOut } from "next-auth/react";
import styles from "src/sass/Home.module.scss";
import { trpc } from "src/utils/trpc";

export default function Component() {
  const { data: session } = useSession();
  const result = trpc.getUser.useQuery();
  console.log(result);
  if (session) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24`}
      >
        <h1 className={styles.heading}> Signed in as {session?.user?.email}</h1>

        <button className="btn w-30 ml-2 mt-2" onClick={() => signOut()}>
          Sign out
        </button>
      </main>
    );
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      {/* <h1 className={styles.heading}> Not signed in!!</h1> */}

      <button className="btn w-30 ml-2 mt-2" onClick={() => signIn()}>
        Sign in
      </button>
    </main>
  );
}
