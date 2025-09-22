"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { EmblaOptionsType } from "embla-carousel";
import { DlUiCarrouselAutoPlay } from "@/components/ui/DlUiCarrouselAutoPlay";
import { DlCertificationCard } from "@/components/DlCertificationCard";
import { DlDialogCertificate } from "@/components/DlDialogCertificate";
import { useState } from "react";

const certifications = [
  {
    image: "/assets/images/html-certificate.png",
    title: "html",
    duration: "10h",
  },
  {
    image: "/assets/images/poo-certificate.png",
    title: "poo",
    duration: "9h",
  },
  {
    image: "/assets/images/maquetador-certificate.png",
    title: "maquetador",
    duration: "30h",
  },
  {
    image: "/assets/images/git-certificate.png",
    title: "git",
    duration: "12h",
  },
  {
    image: "/assets/images/javascript-certificate.png",
    title: "javascript",
    duration: "30h",
  },
  {
    image: "/assets/images/mongo-certificate.png",
    title: "mongo",
    duration: "18h",
  },
  {
    image: "/assets/images/node-certificate.png",
    title: "node",
    duration: "42h",
  },
  {
    image: "/assets/images/react-certificate.png",
    title: "react",
    duration: "36h",
  },
  {
    image: "/assets/images/angular-certificate.png",
    title: "angular",
    duration: "18h",
  },
];

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  containScroll: "trimSnaps",
  dragFree: true,
};

const DlCertifications = () => {
  const { t } = useTranslation("certifications");
  const [openCard, setOpenCard] = useState(false);
  const [selectedCert, setSelectedCert] = useState({
    image: "",
    title: "",
    duration: "",
  });

  const handleCertClick = (cert: (typeof certifications)[0]) => {
    setSelectedCert(cert);
    setOpenCard(true);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <DlUiText
          type="h3"
          className="text-v1-primary-600 relative text-center"
        >
          {t("certifications")}
        </DlUiText>
        <DlUiCarrouselAutoPlay
          slides={certifications.map((cert, index) => (
            <DlCertificationCard
              key={index}
              image={cert.image}
              title={cert.title}
              duration={cert.duration}
              onClick={() => handleCertClick(cert)}
            />
          ))}
          options={OPTIONS}
          showControls
        />
      </div>

      {openCard && (
        <DlDialogCertificate
          onClose={() => setOpenCard(false)}
          image={selectedCert.image}
          title={selectedCert.title}
          duration={selectedCert.duration}
        />
      )}
    </>
  );
};

export default DlCertifications;
