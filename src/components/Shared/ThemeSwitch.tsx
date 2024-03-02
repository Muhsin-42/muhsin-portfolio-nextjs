"use client";
import useThemeContext from "@/hook/useThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5 flex size-[3rem] items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
      name="toggle-theme"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
