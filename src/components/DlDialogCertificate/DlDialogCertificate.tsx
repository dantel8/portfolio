import DlUiDialog from "@/components/ui/DlUiDialog/DlUiDialog";
import { DlCertificationCard } from "../DlCertificationCard";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

interface DlDialogCertificateProps {
  onClose: () => void;
  title: string;
  image: string;
  duration: string;
  className?: string;
}

const DlDialogCertificate = ({
  onClose,
  title,
  image,
  duration,
}: DlDialogCertificateProps) => {
  const { t } = useTranslation("certifications");
  const { theme } = useTheme();
  return (
    <DlUiDialog
      onClose={onClose}
      visible={true}
      header={
        <div className={`text-xl font-bold ${
          theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
        }`}>
          {t(title)}
        </div>
      }
    >
      <div className="w-full">
        <DlCertificationCard
          image={image}
          title={title}
          duration={duration}
          onClick={() => {}}
          className={`w-full ${
            theme === "light" 
              ? "bg-white hover:bg-white" 
              : "bg-neutral-800 hover:bg-neutral-800"
          }`}
          imgClassName="w-full"
        />
      </div>
    </DlUiDialog>
  );
};

export default DlDialogCertificate;
