"use client";
import React, { useRef } from "react";
import styles from "./Button.module.css";
import Link from "next/link";
import { AriaButtonProps, useButton } from "react-aria";

type ButtonProps = {
  url?: string;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
} & AriaButtonProps;

const Button = ({
  url,
  size = "large",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;
  const className = `${styles.button} ${styles[size]} ${styles[variant]} ${
    props.isDisabled ? styles.disabled : ""
  }`;
  if (url) {
    return (
      <Link href={url}>
        <div className={className}>{children}</div>
      </Link>
    );
  }
  return (
    <button ref={ref} {...buttonProps} className={className}>
      {children}
    </button>
  );
};

export default Button;
