import { useEffect, useState } from "react";
import Input from "src/components/Input";

import styles from "src/sass/Home.module.scss";

export default function Home() {
  const [input, setInput] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sampleGET");
      const json = await res.json();
      console.log(json);
    };

    return () => {
      fetchData();
    };
  }, []);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    let u = { [name]: value };

    setInput((prev) => ({ ...prev, ...u }));
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("/api/samplePOST", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <h1 className={styles.heading}>Welcome to FIREFLY.JS!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            name="email"
            placeholder="Enter your Email"
            id="email"
            type="email"
            onChange={handleInput}
          />
          <Input
            name="password"
            placeholder="Enter your Password"
            id="password"
            type="password"
            onChange={handleInput}
          />
        </div>
        <button className="btn w-30 ml-2 mt-2" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}