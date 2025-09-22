"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { ArrowDown, UserRound, FileUser } from "lucide-react";
import { useTranslation } from "react-i18next";

const DlHero = () => {
  const { t } = useTranslation("home");
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 min-h-screen relative"
      id="home"
    >
      <DlUiIcon
        lucideIcon={UserRound}
        className="text-v1-primary-600 relative"
        size={100}
      />

      <DlUiText type="h2" className="text-neutral-600 relative">
        {t("name")}
      </DlUiText>
      <DlUiText type="h3" className="text-v1-primary-600 relative text-3xl">
        {t("subtitle")}
      </DlUiText>
      <DlUiText
        type="body1"
        className="text-neutral-600 relative px-6 mb-4 text-center"
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

      <div className="absolute bottom-8 left-[47%] transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground text-v1-primary-600" />
      </div>
    </div>
  );
};

export default DlHero;
