import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import es from "@/lang/es";
import en from "@/lang/en";

i18next.use(initReactI18next).init({
  resources: {
    es,
    en,
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;