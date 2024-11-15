"use client";
import React, { CSSProperties, MutableRefObject, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

export interface ButtonProps extends AriaButtonProps {
  buttonRef?: MutableRefObject<null>;
  className?: string;
  style?: CSSProperties;
}

export const Button = ({
  buttonRef,
  className = "",
  style = {},
  ...props
}: ButtonProps) => {
  const fallbackRef = useRef<null>(null);
  const ref = buttonRef ?? fallbackRef;
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      ref={buttonRef}
      className={className}
      style={style}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
