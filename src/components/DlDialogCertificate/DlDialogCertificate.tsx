import DlUiDialog from "@/components/ui/DlUiDialog/DlUiDialog";
import { DlCertificationCard } from "../DlCertificationCard";
import { useTranslation } from "react-i18next";

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
  return (
    <DlUiDialog
      onClose={onClose}
      visible={true}
      header={
        <div className="text-xl font-bold text-v1-primary-600">{t(title)}</div>
      }
    >
      <div className="w-full">
        <DlCertificationCard
          image={image}
          title={title}
          duration={duration}
          onClick={() => {}}
          className="w-full bg-white hover:bg-white"
          imgClassName="w-full"
        />
      </div>
    </DlUiDialog>
  );
};

export default DlDialogCertificate;
