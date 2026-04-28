"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Code2, Gauge, Users } from "lucide-react";

const EXPERIENCE_ITEMS = [
  {
    company: "HostelSphere",
    role: "Frontend Developer",
    date: "02/2025 - 10/2025",
    image: "/assets/images/hs_img.png",
    points: ["hs_d1", "hs_d2", "hs_d3", "hs_d4", "hs_d5", "hs_d6"],
    tags: ["React", "Tailwind", "PrimeReact"],
    icons: [Code2, Gauge, Users],
  },
  {
    company: "Roitels",
    role: "Frontend Developer",
    date: "07/2025 - 10/2025",
    image: "/assets/images/roitels_img.png",
    points: ["roi_d1", "roi_d2", "roi_d3", "roi_d4", "roi_d5", "roi_d6"],
    tags: ["Forecast", "UX", "APIs"],
    icons: [BriefcaseBusiness, Code2, Users],
  },
];

const DlExperience = () => {
  const { t } = useTranslation("experience");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="mx-auto max-w-7xl px-4 py-20 md:px-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10 text-center">
        <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-v1-primary-500">
          Career
        </p>
        <h3
          className={`mt-3 text-4xl font-bold md:text-5xl ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }`}
        >
          {t("Experience")}
        </h3>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {EXPERIENCE_ITEMS.map((item) => (
          <motion.article
            key={item.company}
            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            className={`overflow-hidden rounded-[1.75rem] border ${
              theme === "light"
                ? "border-black/5 bg-[var(--surface-color)]"
                : "border-white/10 bg-[var(--surface-color)]"
            }`}
          >
            <div className="relative h-52 w-full">
              <Image
                src={item.image}
                alt={`${item.company} Experience`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold">
                  {item.company} · {item.role}
                </h4>
                <p className="font-mono-ui mt-1 text-xs uppercase tracking-[0.25em] text-white/75">
                  {item.date}
                </p>
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className={`text-sm leading-6 ${
                      theme === "light" ? "text-neutral-700" : "text-neutral-300"
                    }`}
                  >
                    {t(point)}
                  </li>
                ))}
              </ul>

            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default DlExperience;
