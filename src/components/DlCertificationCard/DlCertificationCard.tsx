import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { helpers } from "@/utils/helpers";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";

interface DlCertificationCardProps {
  image: string;
  title: string;
  duration: string;
  onClick: () => void;
  className?: string;
  imgClassName?: string;
}

const DlCertificationCard = (props: DlCertificationCardProps) => {
  const { t } = useTranslation("certifications");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={helpers.cn(
        "flex flex-col gap-2 items-center justify-center p-4 rounded-lg w-max h-full cursor-pointer transition-colors border-0",
        theme === "light"
          ? "bg-v1-primary-200 hover:bg-v1-primary-300"
          : "bg-v1-primary-900 hover:bg-v1-primary-800",
        props.className
      )}
      onClick={props.onClick}
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <DlUiImage
        src={props.image}
        alt="certification"
        width={200}
        height={200}
        imageClassName={props.imgClassName}
      />
      <DlUiText
        type="h3"
        className={`text-center text-wrap w-[200px] ${
          theme === "light" ? "text-neutral-800" : "text-neutral-100"
        }`}
      >
        {t(props.title)}
      </DlUiText>
      <DlUiText
        type="body1"
        className={`text-center ${
          theme === "light" ? "text-neutral-700" : "text-neutral-300"
        }`}
      >
        {t("duration")}: {props.duration}
      </DlUiText>
    </motion.button>
  );
};

export default DlCertificationCard;
