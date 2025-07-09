"use client";

import Button from "@/components/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { createTheme } from "@/lib/design-patterns/factory/ThemeFactory";
import React, { useContext, useMemo } from "react";

const Themes = () => {
  const { themes, applyTheme } = useContext(ThemeContext);
  const purplePinkTheme = useMemo(
    () =>
      createTheme({
        name: "Pink / Purple",
        black: { r: 17, g: 17, b: 17 },
        white: { r: 255, g: 255, b: 255 },
        backgroundColor: { r: 67, g: 56, b: 84 },
        textColor: { r: 232, g: 188, b: 185 },
        primaryColor: { r: 174, g: 68, b: 90 }, // 174, 68, 90
        secondaryColor: { r: 110, g: 57, b: 68 }, //110, 57, 68
        neutralColor2: { r: 203, g: 203, b: 203 }, //191, 204, 148
        neutralColor: { r: 45, g: 45, b: 45 }, //140, 172, 144
      }),
    []
  );
  return (
    <Button onPress={() => applyTheme(purplePinkTheme)}>
      {purplePinkTheme.name}
    </Button>
  );
};

export default Themes;
