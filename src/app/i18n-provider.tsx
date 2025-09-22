"use client";

import { ReactNode, useEffect } from "react";
import "@/utils/i18n"; // Importamos la configuración de i18n

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  // Aseguramos que i18n se cargue correctamente en el cliente
  useEffect(() => {
    // Cualquier inicialización adicional de i18n si es necesaria
  }, []);

  return <>{children}</>;
}
