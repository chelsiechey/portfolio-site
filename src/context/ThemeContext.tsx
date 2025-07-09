"use client";

import {
  CreateThemeProps,
  Theme,
  createTheme,
} from "@/lib/design-patterns/factory/ThemeFactory";
import { createContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
  toggle: () => void;
  themes: Theme[];
  activeTheme: Theme;
  applyTheme: (theme: Theme) => void;
  saveTheme: (theme: CreateThemeProps) => Theme;
  removeTheme: (theme: Theme) => void;
  lightTheme: Theme;
  darkTheme: Theme;
};

type ThemeProviderType = {
  children: any;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const darkTheme = useMemo(
    () =>
      createTheme({
        name: "Dark Theme",
        black: { r: 17, g: 17, b: 17 },
        white: { r: 255, g: 255, b: 255 },
        backgroundColor: { r: 17, g: 17, b: 17 },
        textColor: { r: 255, g: 255, b: 255 },
        primaryColor: { r: 83, g: 194, b: 139 },
        secondaryColor: { r: 25, g: 76, b: 51 },
        neutralColor: { r: 45, g: 45, b: 45 },
        neutralColor2: { r: 203, g: 203, b: 203 },
      }),
    []
  );
  const lightTheme = useMemo(
    () =>
      createTheme({
        name: "Light Theme",
        black: { r: 17, g: 17, b: 17 },
        white: { r: 255, g: 255, b: 255 },
        backgroundColor: { r: 227, g: 227, b: 227 },
        textColor: { r: 17, g: 17, b: 17 },
        primaryColor: { r: 25, g: 76, b: 51 },
        secondaryColor: { r: 58, g: 164, b: 111 },
        neutralColor: { r: 203, g: 203, b: 203 },
        neutralColor2: { r: 45, g: 45, b: 45 },
      }),
    []
  );
  const [activeTheme, setActiveTheme] = useState(darkTheme);
  const [themes, setThemes] = useState([] as Theme[]);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      const parsedTheme: Theme = JSON.parse(localStorageTheme);
      const newTheme = createTheme(parsedTheme);
      setActiveTheme(newTheme);
      newTheme.apply();
    } else {
      setActiveTheme(darkTheme);
      darkTheme.apply();
    }
  }, [darkTheme]);

  useEffect(() => {
    const localStorageThemes = localStorage.getItem("themes");
    if (localStorageThemes) {
      const parsedThemes: Theme[] = JSON.parse(localStorageThemes);
      const newThemes = parsedThemes.map((theme) => {
        const { apply, ...remainingTheme } = theme;
        const newTheme = createTheme(remainingTheme);
        return newTheme;
      });
      setThemes(newThemes);
    }
  }, []);

  const saveTheme = (theme: CreateThemeProps) => {
    const newTheme = createTheme(theme);
    setThemes((prev) => {
      const allThemes = [...prev, newTheme];
      localStorage.setItem("themes", JSON.stringify(allThemes));
      return allThemes;
    });
    return newTheme;
  };

  const toggle = () => {
    const newTheme = activeTheme.name === "Dark Theme" ? lightTheme : darkTheme;
    applyTheme(newTheme);
  };

  const applyTheme = (theme: Theme) => {
    setActiveTheme(theme);
    const { apply, ...remainingProps } = theme;
    localStorage.setItem("theme", JSON.stringify(remainingProps));
    apply();
  };

  const removeTheme = (theme: Theme) => {
    setThemes((prev) => {
      const filteredThemes = prev.filter((t) => t.id !== theme.id);
      localStorage.setItem("themes", JSON.stringify(filteredThemes));
      return filteredThemes;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        toggle,
        applyTheme,
        removeTheme,
        saveTheme,
        themes,
        activeTheme,
        lightTheme,
        darkTheme,
      }}
    >
      <div className="theme">{children}</div>
    </ThemeContext.Provider>
  );
};
