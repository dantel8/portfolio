"use client";

import { useTranslation } from "react-i18next";
import { DlDialogCertificate } from "@/components/DlDialogCertificate";
import { useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

const certifications = [
  { 
    image: "/assets/images/html-certificate.png", 
    title: "html", 
    duration: "18h", 
    hours: 10, 
    graduationDate: "2024-07-12", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75433" 
  },
  { 
    image: "/assets/images/poo-certificate.png", 
    title: "poo", 
    duration: "9h", 
    hours: 9, 
    graduationDate: "2024-08-04", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75435" 
  },
  { 
    image: "/assets/images/maquetador-certificate.png", 
    title: "maquetador", 
    duration: "30h", 
    hours: 30, 
    graduationDate: "2024-08-27", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75436" 
  },
  { 
    image: "/assets/images/git-certificate.png", 
    title: "git", 
    duration: "12h", 
    hours: 12, 
    graduationDate: "2024-09-06", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75437" 
  },
  { 
    image: "/assets/images/javascript-certificate.png", 
    title: "javascript", 
    duration: "30h", 
    hours: 30, 
    graduationDate: "2024-10-07", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75438" 
  },
  { 
    image: "/assets/images/mongo-certificate.png", 
    title: "mongo", 
    duration: "18h", 
    hours: 18, 
    graduationDate: "2024-10-30", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75439" 
  },
  { 
    image: "/assets/images/node-certificate.png", 
    title: "node", 
    duration: "42h", 
    hours: 42, 
    graduationDate: "2023-12-18", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75440" 
  },
  { 
    image: "/assets/images/react-certificate.png", 
    title: "react", 
    duration: "36h", 
    hours: 36, 
    graduationDate: "2023-12-28", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75441" 
  },
  { 
    image: "/assets/images/angular-certificate.png", 
    title: "angular", 
    duration: "18h", 
    hours: 18, 
    graduationDate: "2023-12-31", 
    certificateUrl: "https://www.educacionit.com/perfil/dante-lugo-599926/certificado/75442" 
  },
];

const DlCertifications = () => {
  const { t } = useTranslation("certifications");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [openCard, setOpenCard] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState({
    image: "",
    title: "",
    duration: "",
    hours: 0,
    graduationDate: "",
    certificateUrl: "",
  });

  const handleCertClick = (cert: (typeof certifications)[0]) => {
    setSelectedCert(cert);
    setOpenCard(true);
  };

  const scroll = (direction: "left" | "right") => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const amount = element.clientWidth * 0.85;
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.section
        id="certifications"
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-20 md:px-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center">
          <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-v1-primary-500">
            Learning
          </p>
          <h3
            className={`mt-3 text-4xl font-bold md:text-5xl ${
              theme === "light" ? "text-neutral-900" : "text-neutral-100"
            }`}
          >
            {t("certifications")}
          </h3>
        </div>

        <div className="relative group">
          <button
            type="button"
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition md:flex ${
              theme === "light"
                ? "border-black/10 bg-white/80 text-neutral-800"
                : "border-white/10 bg-neutral-900/80 text-neutral-100"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none"
          >
            {certifications.map((cert) => (
              <motion.button
                key={cert.title}
                type="button"
                onClick={() => handleCertClick(cert)}
                whileHover={prefersReducedMotion ? undefined : { y: -8 }}
                className={`group/card relative flex h-[24rem] w-[19rem] shrink-0 overflow-hidden rounded-[1.75rem] text-left ${
                  theme === "light"
                    ? "bg-white shadow-lg shadow-black/5"
                    : "bg-neutral-900 shadow-lg shadow-black/25"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={t(cert.title)}
                  className="absolute inset-0 h-1/2 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                <div
                  className={`absolute bottom-0 left-0 right-0 flex h-1/2 flex-col justify-between p-5 ${
                    theme === "light" ? "bg-white" : "bg-neutral-950"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-v1-primary-500">
                      <GraduationCap className="h-4 w-4" />
                      <span>{cert.duration}</span>
                    </div>
                    <h4
                      className={`text-xl font-bold leading-tight ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-100"
                      }`}
                    >
                      {t(cert.title)}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                          theme === "light" ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        Certificate
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-v1-primary-500 text-white transition-transform group-hover/card:rotate-[-45deg]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition md:flex ${
              theme === "light"
                ? "border-black/10 bg-white/80 text-neutral-800"
                : "border-white/10 bg-neutral-900/80 text-neutral-100"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.section>

      {openCard && (
        <DlDialogCertificate
          onClose={() => setOpenCard(false)}
          image={selectedCert.image}
          title={selectedCert.title}
          duration={selectedCert.duration}
          hours={selectedCert.hours}
          graduationDate={selectedCert.graduationDate}
          certificateUrl={selectedCert.certificateUrl}
        />
      )}
    </>
  );
};

export default DlCertifications;
