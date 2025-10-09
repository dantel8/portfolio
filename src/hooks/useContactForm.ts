import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
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
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return { success: false, error: "missing_fields" };
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
         from_name: name,
         reply_to: email,
         email: email,
         message: message,
         to_name: "Dante Lugo",
         to_email: "dantelugo05060@gmail.com",
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
  };
};
