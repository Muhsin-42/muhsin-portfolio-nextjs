"use client";
import { ThemeContex } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const useThemeContext = () => {
  const context = useContext(ThemeContex);
  if (context === null)
    throw new Error("Theme context must be used within ThemeContextProvider");

  return context;
};

export default useThemeContext;
