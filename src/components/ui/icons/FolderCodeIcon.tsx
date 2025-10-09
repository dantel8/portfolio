import React from "react";

interface FolderCodeIconProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const FolderCodeIcon: React.FC<FolderCodeIconProps> = ({
  className = "",
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-folder-code ${className}`}
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="m14 13-2 2 2 2" />
      <path d="m10 13 2 2-2 2" />
    </svg>
  );
};

export default FolderCodeIcon;
