"use client";

import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import DlNotificationCenter from "@/components/ui/DlNotification/DlNotificationCenter";

export type NotificationType = "success" | "error" | "info" | "warn";

export interface AppNotification {
  id: string;
  message: string;
  type: NotificationType;
  duration: number;
}

interface NotifyOptions {
  message: string;
  type?: NotificationType;
  duration?: number;
}

interface NotificationContextValue {
  notify: (options: NotifyOptions) => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  const remove = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const notify = useCallback(
    ({ message, type = "info", duration = 3200 }: NotifyOptions) => {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

      setNotifications((prev) => [...prev, { id, message, type, duration }]);

      if (duration > 0) {
        setTimeout(() => remove(id), duration);
      }
    },
    [remove]
  );

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <DlNotificationCenter notifications={notifications} onDismiss={remove} />
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotificationContext must be used within a NotificationProvider");
  }
  return context;
};

export default NotificationContext;
