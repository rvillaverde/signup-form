import React, { ChangeEvent } from "react";

import styles from "./input.module.sass";

interface PropTypes {
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  type: "email" | "password" | "text";
  value?: string;
}

const Input = ({ id, label, name, onChange, type, value }: PropTypes) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={styles["form-input"]}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={handleChange}
        type={type}
        value={value || ""}
      />
    </div>
  );
};

export default Input;
