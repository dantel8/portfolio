"use client";

import DlUiDialog from "@/components/ui/DlUiDialog/DlUiDialog";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface DlDialogCertificateProps {
  onClose: () => void;
  title: string;
  image: string;
  duration: string;
  hours: number;
  graduationDate: string;
  certificateUrl: string;
  className?: string;
}

const DlDialogCertificate = ({
  onClose,
  title,
  image,
  hours,
  graduationDate,
  certificateUrl,
}: DlDialogCertificateProps) => {
  const { t } = useTranslation("certifications");
  const { theme } = useTheme();
  const { trackCertificateOpened } = useAnalytics();

  useEffect(() => {
    trackCertificateOpened(t(title));
  }, [title, t, trackCertificateOpened]);

  return (
    <DlUiDialog
      onClose={onClose}
      visible={true}
      classNames={{
        root: "overflow-hidden max-w-[28rem]",
        content: theme === "light" ? "bg-white pt-0" : "bg-neutral-900 pt-0",
        header: "hidden",
        mask: "bg-black/70 backdrop-blur-sm",
      }}
      width="min(92vw, 28rem)"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center px-6 pt-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative flex h-56 w-full max-w-[20rem] overflow-hidden rounded-2xl shadow-2xl ${
              theme === "light"
                ? "bg-gradient-to-br from-neutral-900 to-black"
                : "bg-gradient-to-br from-neutral-800 to-black"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </motion.div>
        </div>

        <div className="px-6 pb-2 pt-6">
          <div className="space-y-3 text-center sm:text-left">
            <h3
              className={`text-xl font-semibold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              {t(title)}
            </h3>
            <div className="space-y-2">
              <div
                className={`text-sm ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                <span className="font-medium">{t("hours")}:</span> {hours}h
              </div>
              <div
                className={`text-sm ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                <span className="font-medium">{t("graduationDate")}:</span> {graduationDate}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 px-6 pb-6">
          <input
            value={certificateUrl}
            readOnly
            className={`h-11 w-full rounded-xl border px-3 text-sm outline-none ${
              theme === "light"
                ? "border-black/10 bg-neutral-50 text-neutral-800"
                : "border-white/10 bg-neutral-950 text-neutral-100"
            }`}
          />

          <div
            className={`flex flex-col gap-2 rounded-b-2xl border-t px-0 pt-1 sm:flex-row sm:justify-end ${
              theme === "light" ? "border-neutral-200" : "border-white/10"
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className={`inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium transition ${
                theme === "light"
                  ? "border-black/10 bg-white text-neutral-700 hover:bg-neutral-50"
                  : "border-white/10 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
              }`}
            >
              {t("close")}
            </button>

            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-v1-primary-500 px-4 text-sm font-medium text-white transition hover:bg-v1-primary-600"
            >
              {t("openLink")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </DlUiDialog>
  );
};

export default DlDialogCertificate;
