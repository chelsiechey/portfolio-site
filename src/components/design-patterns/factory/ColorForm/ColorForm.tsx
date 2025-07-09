"use client";
import React, { useCallback, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ColorForm.module.css";
import Button from "@/components/Button/Button";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { ThemeContext } from "@/context/ThemeContext";
import { ColorType, RGB } from "@/types/design-patterns/factory/types";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Theme name is required"),
  bg: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
  text: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
  primary: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
  secondary: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
  neutral: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
  neutral2: Yup.object({
    r: Yup.number().min(0).max(255).required(),
    g: Yup.number().min(0).max(255).required(),
    b: Yup.number().min(0).max(255).required(),
  }).required(),
});

interface ColorFormProps {
  openThemeModal: () => void;
}

const ColorForm = ({ openThemeModal }: ColorFormProps) => {
  const { saveTheme, applyTheme, activeTheme } = useContext(ThemeContext);

  const getDefaultColor = useCallback(
    (
      color:
        | "backgroundColor"
        | "textColor"
        | "primaryColor"
        | "secondaryColor"
        | "neutralColor"
        | "neutralColor2"
    ) => {
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

  // Initialize Formik form with default values
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      bg: getDefaultColor("backgroundColor"),
      text: getDefaultColor("textColor"),
      primary: getDefaultColor("primaryColor"),
      secondary: getDefaultColor("secondaryColor"),
      neutral: getDefaultColor("neutralColor"),
      neutral2: getDefaultColor("neutralColor2"),
    },
    validationSchema,
    onSubmit: (values) => {
      const theme = saveTheme({
        name: values.name,
        backgroundColor: values.bg,
        textColor: values.text,
        primaryColor: values.primary,
        secondaryColor: values.secondary,
        neutralColor: values.neutral,
        neutralColor2: values.neutral2,
      });
      applyTheme(theme);
    },
  });

  // Update color in Formik state when a color picker changes
  const handleColorChange = (colorType: ColorType, colorValue: RGB) => {
    formik.setFieldValue(colorType, colorValue);
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
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2>Set Background and Text Colors</h2>
      <div className={styles.colors}>
        <ColorSection
          label="Background Color"
          color={formik.values.bg}
          colorType="bg"
        />
        <ColorSection
          label="Text Color"
          color={formik.values.text}
          colorType="text"
        />
        <ColorSection
          label="Primary Color"
          color={formik.values.primary}
          colorType="primary"
        />
        <ColorSection
          label="Secondary Color"
          color={formik.values.secondary}
          colorType="secondary"
        />
        <ColorSection
          label="Neutral Color"
          color={formik.values.neutral}
          colorType="neutral"
        />
        <ColorSection
          label="Neutral Color #2"
          color={formik.values.neutral2}
          colorType="neutral2"
        />
      </div>
      <label htmlFor="name">Theme Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className={styles.buttons}>
        <Button
          type="submit"
          isDisabled={
            !formik.isValid || formik.isSubmitting || !formik.values.name
          }
        >
          Save and Apply
        </Button>
        <Button onPress={openThemeModal} variant="secondary">
          View Themes
        </Button>
      </div>
    </form>
  );
};

export default ColorForm;
