"use client";

import React, { useContext, useRef } from "react";
import styles from "./Toggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useButton } from "react-aria";

const Toggle = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { mode, toggle } = useContext(ThemeContext);
  const { buttonProps } = useButton({ onPress: toggle }, ref);
  return (
    <div className={styles.container} ref={ref} {...buttonProps}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={
          mode === "light"
            ? { left: "var(--size-scaling-2px)" }
            : { right: "var(--size-scaling-2px)" }
        }
      />
    </div>
  );
};

export default Toggle;
