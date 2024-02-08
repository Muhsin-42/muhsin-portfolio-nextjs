"use client";
import { Theme } from "@/lib/types";
import React, { ReactNode, createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContex = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const themeToSet = localTheme || (systemTheme ? "dark" : "light");

    setTheme(themeToSet);
    toggleDocumentClass(themeToSet);
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const themeToSet = localTheme || (prefersDarkScheme ? "dark" : "light");

    setTheme(themeToSet);
    toggleDocumentClass(themeToSet);
  }, []);

  const toggleDocumentClass = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      toggleDocumentClass("dark");
    } else {
      toggleDocumentClass("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <ThemeContex.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContex.Provider>
  );
};

export default ThemeContextProvider;
