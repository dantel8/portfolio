"use client";

import { ReactNode, useEffect } from "react";
import "@/utils/i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
  }, []);

  return <>{children}</>;
}
