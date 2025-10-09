"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { DlUiGlass } from "@/components/ui/DlUiGlass";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import i18n from "@/utils/i18n";
import { useTheme } from "@/context/ThemeContext";

const getMenuItems = (t: (key: string) => string) => [
  {
    label: t("home"),
    href: "/",
  } /* 
  {
    label: t("projects"),
    href: "#about",
  }, */,
  {
    label: t("skill"),
    href: "#skills",
  },
  {
    label: t("contact"),
    href: "#contact",
  },
];

const DlHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("header");

  const [imgLanguage, setImgLanguage] = useState(
    i18n.language === "en" ? "en_img" : "es_img"
  );
  const { theme, toggleTheme } = useTheme();

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleLanguageChanged = () => {
      setImgLanguage(i18n.language === "en" ? "en_img" : "es_img");
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:mx-20">
      <DlUiGlass blur={5} className="overflow-hidden">
        <nav className="flex justify-between items-center w-full p-4 mx-auto">
          <DlUiText
            type="h2"
            className={`relative ${
              theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
            }`}
          >
            {t("title")}
          </DlUiText>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-lg hover:bg-v1-primary-300/30 transition-all duration-300"
              onClick={handleChangeLanguage}
            >
              <Image
                src={`/assets/images/${imgLanguage}.png`}
                alt="es"
                width={24}
                height={24}
              />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-v1-primary-300/30 transition-all duration-300"
              onClick={toggleTheme}
            >
              <DlUiIcon
                lucideIcon={theme === "light" ? Moon : Sun}
                className={
                  theme === "light"
                    ? "text-v1-neutral-700"
                    : "text-v1-neutral-100"
                }
              />
            </button>
            <button className="p-2 rounded-lg hover:bg-v1-primary-300/30 transition-all duration-300">
              <DlUiIcon
                lucideIcon={isOpen ? X : Menu}
                onClick={() => setIsOpen(!isOpen)}
                className={
                  theme === "light"
                    ? "text-v1-neutral-700"
                    : "text-v1-neutral-100"
                }
              />
            </button>
          </div>
        </nav>
      </DlUiGlass>

      {isOpen && (
        <div className="absolute top-full left-0 w-full">
          <DlUiGlass
            blur={5}
            className="rounded-b-lg overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col">
              {getMenuItems(t).map((item) => (
                <li key={item.label}>
                  <Link
                    className={`block px-4 py-3 font-semibold transition-ease-in-out duration-300
                      ${
                        theme === "light"
                          ? "text-v1-neutral-700 hover:text-v1-primary-500"
                          : "text-v1-neutral-100 hover:text-v1-primary-400"
                      }`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </DlUiGlass>
        </div>
      )}
    </header>
  );
};

export default DlHeader;
