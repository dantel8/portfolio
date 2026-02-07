"use client";

import React from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface DlUiTrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  category?: string;
  label?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

const DlUiTrackedLink: React.FC<DlUiTrackedLinkProps> = ({
  href,
  children,
  className = "",
  category: _category = "link",
  label,
  isExternal = false,
  onClick,
}) => {
  const { trackLinkClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si es un enlace interno que comienza con #, rastreamos como navegación interna
    if (href.startsWith("#")) {
      trackLinkClick(href, label || "Internal Navigation");
    } else {
      trackLinkClick(
        href,
        label || (isExternal ? "External Link" : "Internal Link")
      );
    }

    // Si se proporciona una función onClick personalizada, la ejecutamos
    if (onClick) {
      onClick();
    }

    // Si es un enlace interno y no hay onClick personalizado, prevenimos el comportamiento predeterminado
    // y hacemos scroll suave hacia el elemento
    if (href.startsWith("#") && !onClick) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default DlUiTrackedLink;
