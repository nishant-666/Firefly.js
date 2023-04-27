import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = async () => {
    let response = await fetch("/api/hello", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
