"use client";

import { FileUser, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useDownloadCV } from "@/hooks/useDownloadCV";
import { motion, useReducedMotion } from "framer-motion";
import { DlRenderSeeMore } from "@/components/DlRenderSeeMore";

const DlHero = () => {
  const { t } = useTranslation("home");
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
    <motion.section
      className="relative min-h-[100svh] w-full overflow-hidden"
      id="home"
      {...containerMotion}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 h-auto min-h-full min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center md:object-[center_35%]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
      />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/75" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-36 pt-24 text-[#f4f0e8] md:px-6 md:pb-12 md:pt-28">
        <motion.div
          {...itemMotion}
          className="mb-5 inline-flex w-fit items-center rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f4f0e8]/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]"
        >
          Frontend Developer - React - Next.js
        </motion.div>

        <motion.div {...itemMotion}>
            <p className="font-mono-ui mb-3 text-[10px] uppercase tracking-[0.3em] text-[#f4f0e8]/65 sm:text-xs md:text-sm md:tracking-[0.35em]">
              Dante Lugo
            </p>
            <h1 className="font-display text-[22vw] uppercase leading-[0.86] text-[#f4f0e8] sm:text-[20vw] md:text-[18vw] lg:text-[14rem] xl:text-[16rem]">
              Frontend
            </h1>
            <h2 className="font-display -mt-1 text-[15vw] uppercase leading-[0.9] text-v1-primary-300 sm:text-[14vw] md:-mt-2 md:text-[12vw] lg:text-[8rem] xl:text-[9rem]">
              Engineer
            </h2>
          </motion.div>

          <motion.div {...itemMotion} className="max-w-xl lg:pb-6">
            {/* Versión mobile con "Leer más" */}
            <div className="md:hidden">
              <DlRenderSeeMore
                content={t("description")}
                maxWords={25}
                maxHeight={80}
                namespace="home"
                pt={{
                  content: { className: "text-sm leading-6 text-[#f4f0e8]/82" }
                }}
              />
            </div>

            {/* Versión desktop completa */}
            <p className="hidden max-w-[34rem] text-sm leading-6 text-[#f4f0e8]/82 md:block md:text-base">
              {t("description")}
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-v1-primary-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-v1-primary-600 sm:w-auto"
              >
                {t("viewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                aria-label={t("downloadCV")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-[#f4f0e8] backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
                onClick={() =>
                  downloadCV(
                    "/assets/pdf/DanteLugoFrontendCV.pdf",
                    "DanteLugoFrontendCV.pdf"
                  )
                }
              >
                {t("downloadCV")}
                <FileUser className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/dantelugo/",
                  label: "LinkedIn",
                  icon: Linkedin,
                },
                {
                  href: "https://github.com/dantel8",
                  label: "GitHub",
                  icon: Github,
                },
                {
                  href: "mailto:dantelugo05060@gmail.com",
                  label: "Email",
                  icon: Mail,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.label}
                    onClick={() => trackLinkClick(item.href, item.label)}
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-xs text-[#f4f0e8]/82 backdrop-blur-sm sm:px-4 sm:text-sm"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
      </div>
    </motion.section>
  );
};

export default DlHero;
