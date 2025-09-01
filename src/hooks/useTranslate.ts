import { franc } from "franc-min";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import {
  TranslatedText,
  TranslationsRepository,
} from "@/repository/TranslationsRepository";

export interface UseTranslateProps {
  text: string;
  onTranslation?: (translation: TranslatedText) => void;
}

const translationsRepository = new TranslationsRepository();

export const useTranslate = (props: UseTranslateProps) => {
  const { i18n } = useTranslation();
  const [translated, setTranslated] = useState<TranslatedText | null>(null);

  const detectedLanguage = useMemo(() => {
    const lang = franc(props.text);
    if (lang === "eng") return "en";
    if (lang === "spa") return "es";
    return null;
  }, [props.text]);

  const translate = async () => {
    if (!detectedLanguage) return;
    
    const translated = await translationsRepository.translate({
      text: props.text,
      from_lng: detectedLanguage as "es" | "en",
      to_lng: i18n.language as "es" | "en",
    });

    setTranslated(translated);
    props.onTranslation?.(translated);
  };

  const changeLanguage = async (lng: "es" | "en") => {
    await i18n.changeLanguage(lng);
  };

  return {
    detectedLanguage,
    currentLanguage: i18n.language,
    isTranslationNeeded: detectedLanguage && detectedLanguage !== i18n.language,
    translated,
    translate,
    changeLanguage,
  };
};

// Hook de utilidad para acceder a las traducciones
export const useT = () => {
  const { t } = useTranslation();
  return t;
};