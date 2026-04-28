"use client";

import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import ModernMobileMenu from "@/components/ui/ModernMobileMenu";
import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import i18n from "@/utils/i18n";
import { useAnalytics } from "@/hooks/useAnalytics";

const getMenuItems = (t: (key: string) => string) => [
  { label: t("home"), href: "#home" },
  { label: t("skill"), href: "#skills" },
  { label: t("experience"), href: "#experience" },
  { label: t("projects"), href: "#projects" },
  { label: t("certifications"), href: "#certifications" },
  { label: t("contact"), href: "#contact" },
];

const DlHeader = () => {
  const { t } = useTranslation("header");
  const { trackMenuClick, trackLanguageChange, trackThemeChange } = useAnalytics();
  const [imgLanguage, setImgLanguage] = useState(
    i18n.language === "en" ? "en_img" : "es_img"
  );

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    trackLanguageChange(newLang);
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

  const items = getMenuItems(t);
  const mobileItems =
    i18n.language === "en"
      ? [
          { label: "Home", href: "#home", icon: House },
          { label: "Skills", href: "#skills", icon: Wrench },
          { label: "Work", href: "#experience", icon: BriefcaseBusiness },
          { label: "Projects", href: "#projects", icon: FolderKanban },
          { label: "Certs", href: "#certifications", icon: GraduationCap },
          { label: "Contact", href: "#contact", icon: Mail },
        ]
      : [
          { label: "Inicio", href: "#home", icon: House },
          { label: "Skills", href: "#skills", icon: Wrench },
          { label: "Exp.", href: "#experience", icon: BriefcaseBusiness },
          { label: "Proy.", href: "#projects", icon: FolderKanban },
          { label: "Certs", href: "#certifications", icon: GraduationCap },
          { label: "Contacto", href: "#contact", icon: Mail },
        ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[110] px-3 pt-3 [transform:translateZ(0)] md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/85 px-4 py-3 text-[#f4f0e8] shadow-lg [backface-visibility:hidden] [transform:translateZ(0)] md:bg-black/55 md:backdrop-blur-xl md:px-6">
          <Link href="#home" className="font-display text-2xl leading-none tracking-wide">
            DL
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => trackMenuClick(item.label)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#f4f0e8]/72 transition-colors hover:text-[#f4f0e8]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={
                i18n.language === "en" ? "Switch language" : "Cambiar idioma"
              }
              className="rounded-full border border-white/15 bg-white/10 p-2 transition-colors hover:bg-white/15"
              onClick={handleChangeLanguage}
            >
              <Image
                src={`/assets/images/${imgLanguage}.png`}
                alt={i18n.language === "en" ? "English" : "Espanol"}
                width={24}
                height={24}
              />
            </button>

            <ThemeToggleButton onThemeChange={trackThemeChange} />
          </div>
        </nav>
      </header>

      <ModernMobileMenu items={mobileItems} />
    </>
  );
};

export default DlHeader;
