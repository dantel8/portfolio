"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiInput } from "@/components/ui/DlUiInput";
import { useTranslation } from "react-i18next";
import { DlUiButton } from "@/components/ui/DlUiButton";
import { DlUiTextArea } from "@/components/ui/DlUiTextArea";

const DlContact = () => {
  const { t } = useTranslation("contact");
  return (
    <div className="bg-[#fffdf4]">
      <DlUiText
        type="h3"
        className="text-v1-primary-600 relative mt-10 text-center"
      >
        {t("contact")}
      </DlUiText>
      <div className="flex flex-col gap-4 px-3">
        <DlUiInput label={t("name")} />
        <DlUiTextArea label={t("message")} />
        <DlUiButton>{t("send")}</DlUiButton>
      </div>
    </div>
  );
};

export default DlContact;
