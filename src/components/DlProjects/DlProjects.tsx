"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { DlCardProject } from "../DlCardProject";

const DlProjects = () => {
  const { t } = useTranslation("projects");
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-4 md:container md:mx-auto px-4 max-md:mx-2 mb-10">
      <DlUiText
        type="h3"
        className={`relative my-6 text-center ${
          theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
        }`}
      >
        {t("projects")}
      </DlUiText>
      <div className="flex flex-col gap-4">
        <DlCardProject
          useAutoPreview
          title="Notes App"
          description={t("description_notes_app")}
          link="https://notes-app-lugo.onrender.com/"
        />
      </div>
    </div>
  );
};

export default DlProjects;
