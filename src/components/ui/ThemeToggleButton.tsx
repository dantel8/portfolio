"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton({ onThemeChange }: { onThemeChange?: (theme: string) => void }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    toggleTheme();
    onThemeChange?.(newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      className={`relative inline-flex h-11 w-24 items-center rounded-full border px-1.5 transition-colors ${
        isDark
          ? "border-white/10 bg-neutral-900 text-neutral-100"
          : "border-neutral-200 bg-white text-neutral-700"
      }`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={`absolute top-1.5 flex h-8 w-8 items-center justify-center rounded-full ${
          isDark
            ? "left-[3.35rem] bg-v1-primary-500 text-white"
            : "left-1.5 bg-v1-primary-500 text-white"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.span>

      <span className="flex w-full items-center justify-between px-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
      </span>
    </button>
  );
}
