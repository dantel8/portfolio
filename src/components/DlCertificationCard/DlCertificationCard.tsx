import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { helpers } from "@/utils/helpers";
import { useTheme } from "@/context/ThemeContext";

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
  return (
    <div
      className={helpers.cn(
        "flex flex-col gap-2 items-center justify-center p-4 rounded-lg w-max h-full cursor-pointer transition-colors",
        theme === "light"
          ? "bg-v1-primary-200 hover:bg-v1-primary-300"
          : "bg-v1-primary-900 hover:bg-v1-primary-800",
        props.className
      )}
      onClick={props.onClick}
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
    </div>
  );
};

export default DlCertificationCard;
