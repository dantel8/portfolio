"use client";

import { helpers } from "@/utils/helpers";
import { LucideProps } from "lucide-react";
import React, { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";

export type IconSource = "lucide" | "material" | "custom";

interface DlUiIconProps {
  lucideIcon?: React.ElementType<LucideProps>;
  materialIcon?: string;
  customIcon?: string;
  source?: IconSource;
  size?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement | HTMLDivElement>;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  style?: CSSProperties;
  color?: string;
  filled?: boolean;
}

const DlUiIcon = ({
  lucideIcon: Icon,
  materialIcon,
  customIcon,
  source = "lucide",
  size = 24,
  className,
  onClick,
  onMouseDown,
  onMouseUp,
  style,
  color,
  filled,
}: DlUiIconProps) => {
  if (source === "custom" && customIcon) {
    return (
      <div
        role="img"
        style={{
          width: size,
          height: size,
          ...style,
        }}
        className={className}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <Image
          src={`/assets/icons/${customIcon}.svg`}
          alt={customIcon}
          className="h-full w-full"
        />
      </div>
    );
  }

  if (source === "material" && materialIcon) {
    return (
      <span
        style={{
          fontSize: size,
          color,
          ...style,
        }}
        className={helpers.cn(
          "material-symbols-outlined flex items-center justify-center text-center",
          {
            filled: filled,
          },
          className
        )}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {materialIcon}
      </span>
    );
  }

  if (source === "lucide" && Icon) {
    return (
      <Icon
        size={size}
        className={className}
        onClick={onClick as unknown as MouseEventHandler<SVGSVGElement>}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        color={color}
        style={style}
      />
    );
  }

  return null;
};

export default DlUiIcon;
