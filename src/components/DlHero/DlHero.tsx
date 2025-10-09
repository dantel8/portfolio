"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import {
  ArrowDown,
  UserRound,
  FileUser,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { DlUiImage } from "@/components/ui/DlUiImage";

const DlHero = () => {
  const { t } = useTranslation("home");
  const { theme } = useTheme();
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 min-h-screen relative"
      id="home"
    >
      <DlUiImage
        src="/assets/images/foto-portfolio.jpg"
        alt="hero"
        width={120}
        height={120}
        className="relative"
        imageClassName="rounded-full"
      />

      <DlUiText
        type="h2"
        className={`relative ${
          theme === "light" ? "text-neutral-600" : "text-neutral-200"
        }`}
      >
        {t("name")}
      </DlUiText>
      <DlUiText
        type="h3"
        className={`relative text-3xl ${
          theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
        }`}
      >
        {t("subtitle")}
      </DlUiText>
      <DlUiText
        type="body1"
        className={`relative px-6 mb-4 text-center ${
          theme === "light" ? "text-neutral-600" : "text-neutral-300"
        }`}
      >
        {t("description")}
      </DlUiText>

      <div className="flex gap-4 max-md:flex-col">
        <div className="bg-neutral-800 text-white p-3 rounded-lg flex items-center gap-2 text-center justify-around font-semibold">
          {t("viewProjects")}
          <DlUiIcon lucideIcon={ArrowDown} className="text-white" size={18} />
        </div>
        <div className="bg-v1-primary-500 text-white p-3 rounded-lg flex items-center gap-2 text-center justify-around font-semibold">
          {t("downloadCV")}
          <DlUiIcon lucideIcon={FileUser} className="text-white" size={18} />
        </div>
      </div>

      <div className="flex gap-10 mt-10">
        <DlUiIcon
          lucideIcon={Linkedin}
          className={
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }
          size={32}
          onClick={() =>
            window.open("https://www.linkedin.com/in/dantelugo/", "_blank")
          }
        />
        <DlUiIcon
          lucideIcon={Github}
          className={
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }
          size={32}
          onClick={() => window.open("https://github.com/dantel8", "_blank")}
        />
        <DlUiIcon
          lucideIcon={Mail}
          className={
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }
          size={32}
          onClick={() =>
            window.open("mailto:dantelugo05060@gmail.com", "_blank")
          }
        />
      </div>

      <div className="absolute bottom-8 left-[49.4%] max-md:left-[47%] transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className={`h-6 w-6 ${
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }`}
        />
      </div>
    </div>
  );
};

export default DlHero;
