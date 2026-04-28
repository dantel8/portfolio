"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight/* , MapPin */ } from "lucide-react";
import { getScreenshotUrl, type ScreenshotService } from "@/utils/screenshotService";
import { useAnalytics } from "@/hooks/useAnalytics";

const PROJECTS = [
  {
    tag: "Product",/* 
    date: { month: "APR", day: 28 }, */
    title: "ShiftYa",
    descriptionKey: "description_shiftya",
    imageUrl: "",
    imageAlt: "ShiftYa project preview",
    location: { city: "Remote", country: "Argentina" },
    href: "https://shiftya.online/",
    useAutoPreview: true,
    screenshotService: "microlink" as ScreenshotService,
  },
  {
    tag: "Product",/* 
    date: { month: "APR", day: 28 }, */
    title: "Turnow",
    descriptionKey: "description_turnow",
    imageUrl: "",
    imageAlt: "Turnow project preview",
    location: { city: "Remote", country: "Argentina" },
    href: "https://turnow.shiftya.online/",
    useAutoPreview: true,
    screenshotService: "microlink" as ScreenshotService,
  },
];

const DlProjects = () => {
  const { t } = useTranslation("projects");
  const { theme } = useTheme();
  const { trackProjectViewed } = useAnalytics();
  const prefersReducedMotion = useReducedMotion();

  const getProjectPreview = (project: (typeof PROJECTS)[number]) => {
    if (project.imageUrl) return project.imageUrl;

    if (project.useAutoPreview) {
      return getScreenshotUrl(project.href, {
        service: project.screenshotService,
        width: 1440,
        height: 900,
      });
    }

    return "/assets/images/default-project.png";
  };

  return (
    <motion.section
      id="projects"
      className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 md:px-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center">
        <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-v1-primary-500">
          Selected Work
        </p>
        <h3
          className={`mt-3 text-4xl font-bold md:text-5xl ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }`}
        >
          {t("projects")}
        </h3>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.title}
            href={project.href}
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => trackProjectViewed(project.title)}
            whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.01 }}
            className={`block overflow-hidden rounded-[1.75rem] border ${
              theme === "light"
                ? "border-neutral-200 bg-[var(--surface-color)]"
                : "border-white/10 bg-[var(--surface-color)]"
            }`}
          >
            <div className="p-6">
              <header className="mb-4 flex items-center justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    theme === "light"
                      ? "bg-v1-primary-100 text-v1-primary-700"
                      : "bg-v1-primary-900 text-v1-primary-200"
                  }`}
                >
                  {project.tag}
                </span>

                {/* <div className="flex items-center text-xs font-semibold">
                  <span
                    className={`rounded-l-md px-2.5 py-1.5 ${
                      theme === "light"
                        ? "bg-neutral-200 text-neutral-700"
                        : "bg-neutral-800 text-neutral-200"
                    }`}
                  >
                    {project.date.month}
                  </span>
                  <span className="rounded-r-md bg-v1-primary-500 px-2.5 py-1.5 text-white">
                    {project.date.day}
                  </span>
                </div> */}
              </header>

              <div className="space-y-2">
                <h4
                  className={`text-3xl font-bold ${
                    theme === "light" ? "text-neutral-900" : "text-neutral-100"
                  }`}
                >
                  {project.title}
                </h4>
                <p
                  className={`text-sm leading-6 ${
                    theme === "light" ? "text-neutral-700" : "text-neutral-300"
                  }`}
                >
                  {t(project.descriptionKey)}
                </p>
              </div>
            </div>

            <div className="relative mt-2 aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getProjectPreview(project)}
                alt={project.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 text-white">
                {/* <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-semibold">{project.location.city}</p>
                    <p className="text-xs text-white/80">{project.location.country}</p>
                  </div>
                </div> */}

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default DlProjects;
