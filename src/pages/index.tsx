import Head from "next/head";
import SignUpForm, { SignUpData, Status } from "@/components/signup-form";

import styles from "@/styles/SignUp.module.sass";

const SignUp = () => {
  const handleSignUp = async (data: SignUpData): Promise<Status> =>
    fetch("/api/sign-up", {
      body: JSON.stringify(data),
      method: "post",
    }).then((res) => {
      if (res.status === 200) {
        return Promise.resolve("success");
      } else {
        return Promise.resolve("error");
      }
    });

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SignUpForm onSubmit={handleSignUp} />
      </main>
    </>
  );
};

export default SignUp;
