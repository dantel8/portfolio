"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { DlCardProject } from "../DlCardProject";
import { motion, useReducedMotion } from "framer-motion";

const DlProjects = () => {
  const { t } = useTranslation("projects");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="flex flex-col gap-4 md:container md:mx-auto px-4 max-md:mx-2 mb-10"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <DlUiText
        type="h3"
        className={`relative my-6 text-center ${
          theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
        }`}
      >
        {t("projects")}
      </DlUiText>
      <div className="flex gap-4 justify-evenly flex-wrap">
        <DlCardProject
          useAutoPreview
          title="Notes App"
          description={t("description_notes_app")}
          link="https://notes-app-lugo.onrender.com/"
        />
        {/* <DlCardProject
          useAutoPreview
          title="Applyflow"
          description={t("description_applyflow")}
          link="/"
        /> */}
      </div>
    </motion.section>
  );
};

export default DlProjects;
