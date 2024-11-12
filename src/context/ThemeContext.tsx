"use client";

import { createContext, useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

type ThemeContextType = {
  mode: ThemeMode;
  toggle: () => void;
};

type ThemeProviderType = {
  children: any;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [mode, setMode] = useState("dark" as ThemeMode);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeMode) || "dark";
    setMode(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggle = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className="theme">{children}</div>
    </ThemeContext.Provider>
  );
};
