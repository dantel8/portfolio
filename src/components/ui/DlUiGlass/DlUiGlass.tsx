"use client";

import { helpers } from "@/utils/helpers";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface DlUiGlassProps {
  children: ReactNode;
  className?: string;
  blur?: number;
}

const DlUiGlass = ({ children, className, blur = 8 }: DlUiGlassProps) => {
  const { theme } = useTheme();

  // Color de fondo según el tema
  const bgColor =
    theme === "light"
      ? "rgba(255, 253, 244, 0.2)" // Color crema claro para tema light
      : "rgba(30, 30, 30, 0.4)"; // Color gris oscuro para tema dark

  return (
    <div
      className={helpers.cn("relative backdrop-blur bg-transparent", className)}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};

export default DlUiGlass;
