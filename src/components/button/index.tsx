import React from "react";

import styles from "./button.module.sass";

interface PropTypes {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => void;
  buttonStyle?: "primary" | "secondary";
  type: "button" | "submit";
}

const Button = ({
  children,
  disabled,
  onClick,
  buttonStyle,
  type,
}: PropTypes) => (
  <button
    className={[styles.button, buttonStyle || "primary"].join(" ")}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    <span>{children}</span>
  </button>
);

export default Button;
