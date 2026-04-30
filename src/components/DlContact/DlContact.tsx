"use client";

import { useTranslation } from "react-i18next";
import { useContactForm } from "@/hooks/useContactForm";
import { useNotification } from "@/hooks/useNotification";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Briefcase, LucideIcon, Copy, Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useAvailabilitySchedule } from "@/hooks/useAvailabilitySchedule";

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
    <div className="flex items-center gap-3">
      <span
        className={`rounded-2xl p-3 ${
          theme === "light"
            ? "bg-v1-primary-600/10 text-v1-primary-600"
            : "bg-v1-primary-400/10 text-v1-primary-400"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className={theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"}>
          {label}
        </p>
        <span className={theme === "light" ? "text-neutral-700" : "text-neutral-300"}>
          {value}
        </span>
      </div>
      {copyable && (
        <button
          type="button"
          aria-label={`Copiar ${label}`}
          onClick={handleCopy}
          className={`ml-auto rounded-full p-2 ${
            theme === "light"
              ? "bg-v1-primary-600/10 text-v1-primary-600"
              : "bg-v1-primary-400/10 text-v1-primary-400"
          }`}
        >
          <Copy className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

const DlContact = () => {
  const { t } = useTranslation("contact");
  const { theme } = useTheme();
  const notify = useNotification();
  const { trackContactFormSubmit } = useAnalytics();
  const prefersReducedMotion = useReducedMotion();
  const [formError, setFormError] = useState("");
  const { availabilityText } = useAvailabilitySchedule();

  const { formData, loading, status, handleChange, handleSubmit, resetStatus } = useContactForm();

  useEffect(() => {
    if (status === "success") {
      notify({ message: t("messageSent"), type: "success" });
      trackContactFormSubmit?.();
      resetStatus?.();
    } else if (status === "error") {
      notify({ message: t("messageError"), type: "error" });
      resetStatus?.();
    }
  }, [status, notify, resetStatus, t, trackContactFormSubmit]);

  const onSubmit = async (e: React.FormEvent) => {
    setFormError("");
    const result = await handleSubmit(e);
    if (!result.success && result.error === "missing_fields") {
      setFormError(t("fillAllFields"));
      return;
    }
    if (!result.success && result.error === "invalid_email") {
      setFormError(t("invalidEmail"));
    }
  };

  return (
    <motion.section
      id="contact"
      className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`relative grid overflow-visible border md:grid-cols-2 lg:grid-cols-3 ${
          theme === "light"
            ? "border-black/5 bg-[var(--surface-color)]"
            : "border-white/10 bg-[var(--surface-color)]"
        }`}
      >
        <Plus className="absolute -left-3 -top-3 h-6 w-6" />
        <Plus className="absolute -right-3 -top-3 h-6 w-6" />
        <Plus className="absolute -bottom-3 -left-3 h-6 w-6" />
        <Plus className="absolute -bottom-3 -right-3 h-6 w-6" />
        
        <div className="lg:col-span-2">
          <div className="space-y-6 px-5 py-8 md:p-8">
            <div className="space-y-3">
              <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-v1-primary-500">
                Contact
              </p>
              <h3
                className={`text-4xl font-bold md:text-5xl ${
                  theme === "light" ? "text-neutral-900" : "text-neutral-100"
                }`}
              >
                {t("contact")}
              </h3>
              <p
                className={`max-w-2xl text-sm leading-6 md:text-base ${
                  theme === "light" ? "text-neutral-700" : "text-neutral-300"
                }`}
              >
                Frontend engineering con foco en producto, performance y detalle visual. Si tenés una búsqueda abierta o un proyecto que necesita ritmo de entrega, escribime.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              <ContactInfoItem
                icon={Mail}
                label={t("email")}
                value="dantelugo050602@gmail.com"
                copyable
                copyMessage={t("emailCopied")}
                copyErrorMessage={t("emailCopyError")}
              />
              <ContactInfoItem icon={Phone} label={t("phone")} value="+54 9 11 3251 3611" />
              <ContactInfoItem icon={MapPin} label={t("address")} value="Buenos Aires, Argentina" />
              <ContactInfoItem
                icon={Briefcase}
                label={t("disponibility")}
                value={availabilityText || "Disponible en tu zona: --:-- - --:--"}
              />
            </div>
          </div>
        </div>

        <div
          className={`border-t p-5 md:border-l md:border-t-0 ${
            theme === "light"
              ? "border-black/5 bg-black/[0.03]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className={
                  theme === "light"
                    ? "text-sm font-medium text-neutral-700"
                    : "text-sm font-medium text-neutral-300"
                }
              >
                {t("name")}
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className={`h-11 rounded-xl border px-3 text-sm outline-none transition ${
                  theme === "light"
                    ? "border-black/10 bg-white text-neutral-800 focus:border-v1-primary-500"
                    : "border-white/10 bg-neutral-900 text-neutral-100 focus:border-v1-primary-400"
                }`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className={
                  theme === "light"
                    ? "text-sm font-medium text-neutral-700"
                    : "text-sm font-medium text-neutral-300"
                }
              >
                {t("email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className={`h-11 rounded-xl border px-3 text-sm outline-none transition ${
                  theme === "light"
                    ? "border-black/10 bg-white text-neutral-800 focus:border-v1-primary-500"
                    : "border-white/10 bg-neutral-900 text-neutral-100 focus:border-v1-primary-400"
                }`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className={
                  theme === "light"
                    ? "text-sm font-medium text-neutral-700"
                    : "text-sm font-medium text-neutral-300"
                }
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                rows={5}
                className={`min-h-[8rem] rounded-xl border px-3 py-2 text-sm outline-none transition ${
                  theme === "light"
                    ? "border-black/10 bg-white text-neutral-800 focus:border-v1-primary-500"
                    : "border-white/10 bg-neutral-900 text-neutral-100 focus:border-v1-primary-400"
                }`}
              />
            </div>

            {formError && (
              <p
                role="alert"
                className={theme === "light" ? "text-sm text-red-600" : "text-sm text-red-300"}
              >
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-v1-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-v1-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? t("sending") : t("send")}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default DlContact;
