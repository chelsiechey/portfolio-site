import React from "react";
import styles from "./ColorSwatch.module.css";
import { RGB } from "@/types/design-patterns/factory/types";

interface ColorSwatchProps {
  color: RGB;
}

const ColorSwatch = ({ color }: ColorSwatchProps) => {
  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return (
    <div
      className={styles.swatch}
      style={{ backgroundColor: rgbString }}
      aria-label={rgbString}
    />
  );
};

export default ColorSwatch;
