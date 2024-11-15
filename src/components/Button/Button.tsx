"use client";
import React, { CSSProperties, MutableRefObject, useRef } from "react";
import styles from "./Button.module.css";
import { AriaButtonProps, useButton } from "react-aria";
import { Button as ReactAriaButton } from "../react-aria/Button/Button";

export interface ButtonProps extends AriaButtonProps {
  buttonRef?: MutableRefObject<null>;
  className?: string;
  style?: CSSProperties;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
}

const Button = ({
  size = "large",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[size]} ${
    styles[variant]
  } ${className} ${props.isDisabled ? styles.disabled : ""}`;

  return <ReactAriaButton className={buttonClassName} {...props} />;
};

export default Button;
