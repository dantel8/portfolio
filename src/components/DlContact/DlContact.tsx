"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiInput } from "@/components/ui/DlUiInput";
import { useTranslation } from "react-i18next";
import { DlUiButton } from "@/components/ui/DlUiButton";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { DlUiTextArea } from "@/components/ui/DlUiTextArea";
import { useContactForm } from "@/hooks/useContactForm";
import { useNotification } from "@/hooks/useNotification";
import { useEffect } from "react";
import { Mail, MapPin, Phone, Briefcase, LucideIcon, Copy } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  copyable?: boolean;
  value: string;
  copyMessage?: string;
  copyErrorMessage?: string;
}

const ContactInfoItem = ({
  icon: Icon,
  label,
  copyable,
  value,
  copyMessage,
  copyErrorMessage,
}: ContactInfoItemProps) => {
  const { theme } = useTheme();
  const notify = useNotification();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      if (copyMessage) notify({ message: copyMessage, type: "success" });
    } catch {
      if (copyErrorMessage) notify({ message: copyErrorMessage, type: "error" });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <DlUiIcon
        lucideIcon={Icon}
        className={`rounded-full p-2 ${
          theme === "light"
            ? "text-v1-primary-600 bg-v1-primary-600/10"
            : "text-v1-primary-400 bg-v1-primary-400/10"
        }`}
        size={32}
      />
      <div>
        <DlUiText
          type="body1"
          className={
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }
        >
          {label}
        </DlUiText>
        <span
          className={
            theme === "light" ? "text-neutral-700" : "text-neutral-300"
          }
        >
          {value}
        </span>
      </div>
      {copyable && (
        <button
          onClick={handleCopy}
          className={`ml-auto p-2 rounded-full ${
            theme === "light"
              ? "text-v1-primary-600 bg-v1-primary-600/10"
              : "text-v1-primary-400 bg-v1-primary-400/10"
          }`}
        >
          <DlUiIcon
            lucideIcon={Copy}
            size={20}
          />
        </button>
      )}
    </div>
  );
};

const DlContact = () => {
  const { t } = useTranslation("contact");
  const { theme } = useTheme();
  const notify = useNotification();

  const { formData, loading, status, handleChange, handleSubmit } =
    useContactForm();

  // Notificar estados de envío con toasts globales
  useEffect(() => {
    if (status === "success") {
      notify({ message: t("messageSent"), type: "success" });
    } else if (status === "error") {
      notify({ message: t("messageError"), type: "error" });
    }
  }, [status, notify, t]);

  const onSubmit = async (e: React.FormEvent) => {
    const result = await handleSubmit(e);
    if (!result.success && result.error === "missing_fields") {
      alert(t("fillAllFields"));
    }
  };

  return (
    <div
      id="contact"
      className="flex max-md:flex-col max-md:gap-10 gap-4 justify-center items-center w-full"
    >
      <div
        className={`backdrop-blur-sm rounded-xl p-4 w-1/2 max-md:w-[100vw] max-md:p-0 ${
          theme === "light" ? "bg-[#fffdf4]/70" : "transparent"
        }`}
      >
        <DlUiText
          type="h3"
          className={`relative mt-10 text-center ${
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }`}
        >
          {t("contact")}
        </DlUiText>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 px-3">
          <DlUiInput
            name="name"
            label={t("name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent"
            classNames={{
              input: `bg-transparent backdrop-blur-sm ${
                theme === "light"
                  ? "border-v1-primary-200 text-neutral-800"
                  : "border-v1-primary-400 text-neutral-100"
              }`,
              label:
                theme === "light" ? "text-neutral-700" : "text-neutral-300",
            }}
          />
          <DlUiInput
            name="email"
            label={t("email")}
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent"
            classNames={{
              input: `bg-transparent backdrop-blur-sm ${
                theme === "light"
                  ? "border-v1-primary-200 text-neutral-800"
                  : "border-v1-primary-400 text-neutral-100"
              }`,
              label:
                theme === "light" ? "text-neutral-700" : "text-neutral-300",
            }}
          />
          <DlUiTextArea
            name="message"
            label={t("message")}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-transparent"
            classNames={{
              input: `bg-transparent backdrop-blur-sm ${
                theme === "light"
                  ? "border-v1-primary-200 text-neutral-800"
                  : "border-v1-primary-400 text-neutral-100"
              }`,
              label:
                theme === "light" ? "text-neutral-700" : "text-neutral-300",
            }}
          />

          <DlUiButton
            type="submit"
            disabled={loading}
            variant={theme === "light" ? "primary" : "secondary"}
            className={
              theme === "dark"
                ? "!bg-v1-primary-600 hover:!bg-v1-primary-700"
                : ""
            }
          >
            {loading ? t("sending") : t("send")}
          </DlUiButton>
        </form>
      </div>
      <div
        className={`flex flex-col gap-4 p-4 shadow-md rounded-xl h-full max-md:w-96 ${
          theme === "light" ? "bg-white/70" : "bg-neutral-800/70"
        }`}
      >
        <DlUiText
          type="h3"
          className={
            theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"
          }
        >
          {t("contactInfo")}
        </DlUiText>

        <ContactInfoItem
          icon={Mail}
          label={t("email")}
          value="dantelugo050602@gmail.com"
          copyable
          copyMessage={t("emailCopied")}
          copyErrorMessage={t("emailCopyError")}
        />

        <ContactInfoItem
          icon={Phone}
          label={t("phone")}
          value="+54 9 11 3251 3611"
        />

        <ContactInfoItem
          icon={MapPin}
          label={t("address")}
          value="Buenos Aires, Argentina"
        />

        <ContactInfoItem
          icon={Briefcase}
          label={t("disponibility")}
          value={t("hours")}
        />
      </div>
    </div>
  );
};

export default DlContact;
