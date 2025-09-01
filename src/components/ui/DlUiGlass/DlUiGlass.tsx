"use client";

import { helpers } from "@/utils/helpers";
import { ReactNode } from "react";

interface DlUiGlassProps {
  children: ReactNode;
  className?: string;
  blur?: number;
}

const DlUiGlass = ({ children, className, blur = 8 }: DlUiGlassProps) => {
  return (
    <div
      className={helpers.cn("relative backdrop-blur bg-transparent", className)}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default DlUiGlass;
