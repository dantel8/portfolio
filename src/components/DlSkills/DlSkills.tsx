"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";

const skills = [
  { name: "React", image: "React.png" },
  { name: "Next.js", image: "Next.js.png" },
  { name: "Tailwind CSS", image: "Tailwind CSS.png" },
  { name: "TypeScript", image: "TypeScript.png" },
  { name: "Angular", image: "Angular.png" },
  { name: "Vue.js", image: "Vue.js.png" },
  { name: "Sass", image: "Sass.png" },
  { name: "Node.js", image: "Node.js.png" },
  { name: "Express", image: "Express.png" },
  { name: "Java", image: "Java.png" },
  { name: "Spring Boot", image: "Spring.png" },
  { name: "C++", image: "Cpp.png" },
  { name: "MySQL", image: "MySQL.png" },
  { name: "Git", image: "Git.png" },
  { name: "GitHub", image: "GitHub.png" },
  { name: "Deploy", image: "Deploy.png" },
  { name: "AI", image: "Ai.png" },
];

const DlSkills = () => {
  const { t } = useTranslation("skills");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-20 md:px-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col gap-3 text-center">
        <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-v1-primary-500">
          Toolbox
        </p>
        <h3
          className={`text-4xl font-bold md:text-5xl ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }`}
        >
          {t("skills")}
        </h3>
      </div>

      <div
        className={`rounded-[2rem] border p-4 md:p-6 ${
          theme === "light"
            ? "border-black/5 bg-[var(--surface-color)]"
            : "border-white/10 bg-[var(--surface-color)]"
        }`}
      >
        <div className="grid grid-cols-3 gap-3 pt-2 sm:grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <motion.a
              key={skill.name}
              whileHover={prefersReducedMotion ? undefined : { y: -8 }}
              className={`group relative flex min-h-[7.25rem] w-full flex-col items-center justify-center gap-3 rounded-[1.35rem] border px-3 py-4 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v1-primary-500 md:min-h-[8.5rem] ${
                theme === "light"
                  ? "border-black/5 bg-gradient-to-b from-white to-neutral-100"
                  : "border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-800"
              }`}
              aria-label={skill.name}
            >
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                  src={`/assets/images/${skill.image}`}
                  alt={skill.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span
                className={`text-center text-xs font-semibold leading-tight md:text-sm ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-200"
                }`}
              >
                {skill.name}
              </span>
              <span className="sr-only">{skill.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DlSkills;
