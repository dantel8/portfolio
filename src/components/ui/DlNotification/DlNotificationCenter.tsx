"use client";

import { useTheme } from "@/context/ThemeContext";
import type { AppNotification } from "@/context/NotificationContext";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  XCircle,
} from "lucide-react";

interface DlNotificationCenterProps {
  notifications: AppNotification[];
  onDismiss: (id: string) => void;
}

const typeStyles = {
  success: {
    icon: CheckCircle2,
    accent: "border-l-4 border-l-v1-success-400",
    iconColor: {
      light: "text-v1-success-400",
      dark: "text-v1-success-100",
    },
    text: {
      light: "text-v1-success-600",
      dark: "text-v1-success-100",
    },
  },
  info: {
    icon: Info,
    accent: "border-l-4 border-l-v1-info-400",
    iconColor: {
      light: "text-v1-info-400",
      dark: "text-v1-info-100",
    },
    text: {
      light: "text-v1-info-600",
      dark: "text-v1-info-100",
    },
  },
  warn: {
    icon: AlertTriangle,
    accent: "border-l-4 border-l-v1-warn-400",
    iconColor: {
      light: "text-v1-warn-400",
      dark: "text-v1-warn-100",
    },
    text: {
      light: "text-v1-warn-600",
      dark: "text-v1-warn-100",
    },
  },
  error: {
    icon: XCircle,
    accent: "border-l-4 border-l-v1-error-400",
    iconColor: {
      light: "text-v1-error-400",
      dark: "text-v1-error-300",
    },
    text: {
      light: "text-v1-error-600",
      dark: "text-v1-error-200",
    },
  },
};

const DlNotificationCenter = ({
  notifications,
  onDismiss,
}: DlNotificationCenterProps) => {
  const { theme } = useTheme();

  const baseBox =
    theme === "light"
      ? "bg-white/90 border-neutral-200 shadow-lg"
      : "bg-neutral-900/80 border-neutral-700 shadow-xl";

  return (
    <div className="pointer-events-none fixed top-4 right-4 z-50 flex max-w-sm flex-col gap-3">
      {notifications.map((notification) => {
        const style = typeStyles[notification.type];
        const Icon = style.icon;

        return (
          <div
            key={notification.id}
            className={`pointer-events-auto flex items-start gap-3 rounded-lg border px-3 py-2 animate-fade-in ${baseBox} ${style.accent}`}
            role="status"
            aria-live="polite"
          >
            <Icon
              className={`mt-0.5 h-5 w-5 ${
                style.iconColor[theme === "light" ? "light" : "dark"]
              }`}
            />
            <p
              className={`flex-1 text-sm leading-snug ${
                style.text[theme === "light" ? "light" : "dark"]
              }`}
            >
              {notification.message}
            </p>
            <button
              onClick={() => onDismiss(notification.id)}
              className={`rounded-full p-1 transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                theme === "light"
                  ? "focus:ring-neutral-300 focus:ring-offset-white"
                  : "focus:ring-neutral-600 focus:ring-offset-neutral-900"
              }`}
              aria-label="Cerrar notificación"
            >
              <X
                size={16}
                className={
                  style.iconColor[theme === "light" ? "light" : "dark"]
                }
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DlNotificationCenter;
