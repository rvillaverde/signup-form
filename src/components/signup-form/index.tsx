import { validateEmail } from "@/helpers/email";
import { validatePassword } from "@/helpers/password";
import React, { FormEvent, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";

import styles from "./form.module.sass";

export interface SignUpData {
  email: string;
  password: string;
}

export type Status = "error" | "success";

interface PropTypes {
  onSubmit: (data: SignUpData) => Promise<Status>;
}

const SignUpForm = ({ onSubmit }: PropTypes) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>();

  useEffect(() => {
    setIsValid(validateEmail(email) && validatePassword(password));
    setStatus(undefined);
  }, [email, password]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isValid) {
      const status = await onSubmit({ email, password });
      setStatus(status);
    }
  };

  const handleEmailChange = (value: string) => setEmail(value);

  const handlePasswordChange = (value: string) => setPassword(value);

  return (
    <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["form-row"]}>
        <Input
          id="email"
          label="Email"
          name="email"
          onChange={handleEmailChange}
          type="email"
          value={email}
        />
      </div>
      <div className={styles["form-row"]}>
        <Input
          id="password"
          label="Password"
          name="password"
          onChange={handlePasswordChange}
          type="password"
          value={password}
        />
      </div>
      {!!status ? (
        <div className={styles["form-row"]}>
          {status === "success" ? (
            <div className={styles.confirmation}>Sign up successfully!</div>
          ) : (
            <div className={styles.error}>There was an error signing up.</div>
          )}
        </div>
      ) : null}
      <div className={styles["form-row"]}>
        <Button disabled={!isValid || status === "success"} type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
