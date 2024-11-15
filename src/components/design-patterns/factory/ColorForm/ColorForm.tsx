"use client";
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./ColorForm.module.css";
import Button from "@/components/Button/Button";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { ThemeContext } from "@/context/ThemeContext";
import { ColorType, RGB } from "@/types/design-patterns/factory/types";

const ColorForm = () => {
  const { saveTheme, applyTheme, activeTheme } = useContext(ThemeContext);
  const getDefaultColor = useCallback(
    (color: "backgroundColor" | "textColor" | "primaryColor") => {
      if (activeTheme[color] !== undefined) {
        return {
          r: activeTheme[color]!.r,
          g: activeTheme[color]!.g,
          b: activeTheme[color]!.b,
        };
      } else {
        return { r: 0, g: 0, b: 0 };
      }
    },
    [activeTheme]
  );

  useEffect(() => {
    if (activeTheme) {
      setBackgroundColor(getDefaultColor("backgroundColor"));
      setTextColor(getDefaultColor("textColor"));
      setPrimaryColor(getDefaultColor("primaryColor"));
    }
  }, [activeTheme, getDefaultColor]);

  const [backgroundColor, setBackgroundColor] = useState<RGB>(
    getDefaultColor("backgroundColor")
  );
  const [textColor, setTextColor] = useState<RGB>(getDefaultColor("textColor"));
  const [primaryColor, setPrimaryColor] = useState<RGB>(
    getDefaultColor("primaryColor")
  );
  const [name, setName] = useState("");

  const handleColorChange = (colorType: ColorType, colorValue: RGB) => {
    if (colorType === "bg") {
      setBackgroundColor(colorValue);
    } else if (colorType === "text") {
      setTextColor(colorValue);
    } else {
      setPrimaryColor(colorValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const theme = saveTheme({
      name,
      backgroundColor,
      textColor,
      primaryColor,
    });
    applyTheme(theme);
  };

  const ColorSection = ({
    label,
    color,
    colorType,
  }: {
    label: string;
    color: RGB;
    colorType: ColorType;
  }) => (
    <div className={styles.colorSection}>
      <h3>{label}</h3>
      <ColorPicker
        aria-label={`Select ${label.toLowerCase()}`}
        label="Select Color"
        color={color}
        setColor={(newColor) => handleColorChange(colorType, newColor)}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Set Background and Text Colors</h2>
      <ColorSection
        label="Background Color"
        color={backgroundColor}
        colorType="bg"
      />
      <ColorSection label="Text Color" color={textColor} colorType="text" />
      <ColorSection
        label="Primary Color"
        color={primaryColor}
        colorType="primary"
      />
      <label htmlFor="theme-name">Theme Name</label>
      <input
        type="text"
        id="theme-name"
        name="theme-name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Save and Apply</Button>
    </form>
  );
};

export default ColorForm;
