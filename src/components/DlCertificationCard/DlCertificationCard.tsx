import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { helpers } from "@/utils/helpers";

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
  return (
    <div
      className={helpers.cn(
        "flex flex-col gap-2 items-center justify-center bg-v1-primary-400/20 p-4 rounded-lg w-max h-full cursor-pointer hover:bg-v1-primary-400/30 transition-colors",
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
      <DlUiText type="h3" className="text-center text-wrap w-[200px]">
        {t(props.title)}
      </DlUiText>
      <DlUiText type="body1" className="text-center">
        {t("duration")}: {props.duration}
      </DlUiText>
    </div>
  );
};

export default DlCertificationCard;
