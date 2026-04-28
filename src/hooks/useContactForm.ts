import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company: string;
}

interface UseContactFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useContactForm = ({ onSuccess, onError }: UseContactFormProps = {}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", company: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message, company } = formData;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return { success: false, error: "missing_fields" };
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!isValidEmail) {
      return { success: false, error: "invalid_email" };
    }

    // Honeypot anti-spam: si el bot completa este campo oculto, ignoramos el envío.
    if (company.trim()) {
      return { success: true, ignored: true };
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS configuration missing");
      setStatus("error");
      onError?.();
      return { success: false, error: "config_missing" };
    }

    setLoading(true);
    setStatus("idle");

     try {
       
       await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
         from_name: trimmedName,
         reply_to: trimmedEmail,
         email: trimmedEmail,
         message: trimmedMessage,
         to_name: "Dante Lugo",
         to_email: "dantelugo050602@gmail.com",
       });

      setStatus("success");
      resetForm();
      onSuccess?.();
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      onError?.();
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    status,
    handleChange,
    handleSubmit,
    resetForm,
    resetStatus: () => setStatus("idle"),
  };
};
