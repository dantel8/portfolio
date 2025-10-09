"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiInput } from "@/components/ui/DlUiInput";
import { useTranslation } from "react-i18next";
import { DlUiButton } from "@/components/ui/DlUiButton";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { DlUiTextArea } from "@/components/ui/DlUiTextArea";
import { useContactForm } from "@/hooks/useContactForm";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Briefcase, LucideIcon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NotificationMessageProps {
  show: boolean;
  fadeOut: boolean;
  type: "success" | "error";
  message: string;
}

const NotificationMessage = ({
  show,
  fadeOut,
  type,
  message,
}: NotificationMessageProps) => {
  const { theme } = useTheme();
  if (!show) return null;

  const colorClass =
    type === "success"
      ? theme === "light"
        ? "text-v1-primary-700"
        : "text-v1-primary-400"
      : theme === "light"
      ? "text-v1-error-400"
      : "text-v1-error-300";

  return (
    <p
      className={`${colorClass} text-center transition-opacity duration-500 ${
        fadeOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      {message}
    </p>
  );
};

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const ContactInfoItem = ({
  icon: Icon,
  label,
  value,
}: ContactInfoItemProps) => {
  const { theme } = useTheme();
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
    </div>
  );
};

const DlContact = () => {
  const { t } = useTranslation("contact");
  const { theme } = useTheme();
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const { formData, loading, status, handleChange, handleSubmit } =
    useContactForm();

  useEffect(() => {
    if (status === "success" || status === "error") {
      setFadeOut(false);
      setShowMessage(true);
      setMessageType(status);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 2500);

      const hideTimer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [status]);

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

          <NotificationMessage
            show={showMessage && messageType === "success"}
            fadeOut={fadeOut}
            type="success"
            message={t("messageSent")}
          />

          <NotificationMessage
            show={showMessage && messageType === "error"}
            fadeOut={fadeOut}
            type="error"
            message={t("messageError")}
          />
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
          value="dantelugo05060@gmail.com"
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
          value="Lunes a Viernes, 9:00 AM - 6:00 PM"
        />
      </div>
    </div>
  );
};

export default DlContact;
