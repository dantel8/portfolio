"use client";

import { ReactNode, useEffect } from "react";
import i18n from "@/utils/i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const syncDocumentLanguage = (lng: string) => {
      document.documentElement.lang = lng;
    };

    syncDocumentLanguage(i18n.language || "es");
    i18n.on("languageChanged", syncDocumentLanguage);

    return () => {
      i18n.off("languageChanged", syncDocumentLanguage);
    };
  }, []);

  return <>{children}</>;
}
