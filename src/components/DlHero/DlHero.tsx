"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { FileUser, Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { DlUiImage } from "@/components/ui/DlUiImage";
import { useAnalytics } from "@/hooks/useAnalytics";
import { DlRenderSeeMore } from "@/components/DlRenderSeeMore";
import { useDownloadCV } from "@/hooks/useDownloadCV";
import { DlUiButton } from "@/components/ui/DlUiButton";
import { motion, useReducedMotion } from "framer-motion";

const DlHero = () => {
  const { t } = useTranslation("home");
  const { theme } = useTheme();
  const { trackLinkClick } = useAnalytics();
  const { downloadCV } = useDownloadCV();
  const prefersReducedMotion = useReducedMotion();

  const containerMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.08,
        },
      };

  const itemMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: "easeOut" as const },
      };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 min-h-screen relative py-20 md:py-20"
      id="home"
      style={{
        justifyContent: "safe center",
      }}
      {...containerMotion}
    >
      <motion.div {...itemMotion}>
        <DlUiImage
          src="/assets/images/foto-porfolio.png"
          alt="Foto de perfil de Dante Lugo"
          width={120}
          height={120}
          priority
          className="relative"
          imageClassName="rounded-full"
        />
      </motion.div>

      <motion.div {...itemMotion}>
        <DlUiText
          type="h2"
          className={`relative ${
            theme === "light" ? "text-neutral-600" : "text-neutral-200"
          }`}
        >
          {t("name")}
        </DlUiText>
      </motion.div>
      <motion.div {...itemMotion}>
        <DlUiText
          type="h3"
          className={`relative text-3xl ${
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }`}
        >
          {t("subtitle")}
        </DlUiText>
      </motion.div>
      <motion.div {...itemMotion} className="flex justify-center">
        <DlRenderSeeMore
          content={t("description")}
          maxWords={30}
          namespace="home"
          scrollToTopOnCollapse={true}
          className="relative px-6 mb-4 md:w-3/5"
          pt={{
        content: {
          type: "body1",
          className: `text-center ${
            theme === "light" ? "text-neutral-600" : "text-neutral-300"
          }`,
        },
          }}
        />
      </motion.div>

      <motion.div className="flex justify-center" {...itemMotion}>
        <DlUiButton
          type="button"
          aria-label={t("downloadCV")}
          className="flex !bg-v1-primary-500 hover:!bg-v1-primary-600 text-white !h-auto !px-4 !py-3 !rounded-lg font-semibold"
          onClick={() =>
            downloadCV(
              "/assets/pdf/DanteLugoFrontendCV.pdf",
              "DanteLugoFrontendCV.pdf"
            )
          }
        >
          {t("downloadCV")}
          <DlUiIcon lucideIcon={FileUser} className="text-white" size={18} />
        </DlUiButton>
      </motion.div>

      <motion.div className="flex gap-10 mt-10" {...itemMotion}>
        <motion.a
          href="https://www.linkedin.com/in/dantelugo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Dante Lugo"
          onClick={() =>
            trackLinkClick("https://www.linkedin.com/in/dantelugo/", "LinkedIn")
          }
          whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.06 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          <DlUiIcon
            lucideIcon={Linkedin}
            className={
              theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
            }
            size={32}
          />
        </motion.a>
        <motion.a
          href="https://github.com/dantel8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Dante Lugo"
          onClick={() => trackLinkClick("https://github.com/dantel8", "GitHub")}
          whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.06 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          <DlUiIcon
            lucideIcon={Github}
            className={
              theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
            }
            size={32}
          />
        </motion.a>
        <motion.a
          href="mailto:dantelugo05060@gmail.com"
          aria-label="Enviar email a Dante Lugo"
          onClick={() =>
            trackLinkClick("mailto:dantelugo05060@gmail.com", "Email")
          }
          whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.06 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          <DlUiIcon
            lucideIcon={Mail}
            className={
              theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
            }
            size={32}
          />
        </motion.a>
      </motion.div>

      <div
        className={`absolute bottom-8 left-[49.4%] max-md:left-[47%] transform -translate-x-1/2 ${
          prefersReducedMotion ? "" : "animate-bounce"
        }`}
      >
        <ArrowDown
          className={`h-6 w-6 ${
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default DlHero;
