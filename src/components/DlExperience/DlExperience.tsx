"use client";
import { DlUiText } from "@/components/ui/DlUiText";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

const DlExperience = () => {
    const { t } = useTranslation("experience");
    const { theme } = useTheme();

    return (
        <>
            <DlUiText
            type="h3"
            className={`relative my-6 text-center ${theme === "light" ? "text-v1-primary-600" : "text-v1-primary-400"}`}>
                {t("Experience")}
            </DlUiText>

            <div className="flex max-md:justify-around justify-evenly max-md:flex-row flex-row gap-8 max-md:gap-4 flex-wrap">
                <div className="max-w-[90%] max-md:mx-auto">
                    <Image
                        src={"/assets/images/hs_img.png"}
                        alt="HostelSphere Experience"
                        width={200}
                        height={200}
                        className="mx-auto rounded-xl"
                    />
                    <DlUiText
                        type="h4"
                        className={`relative my-2 text-center ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                        HostelSphere - Frontend Developer
                    </DlUiText>
                    <DlUiText
                        type="h6"
                        className={`relative my-2 text-center ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                        02/2025 - 10/2025
                    </DlUiText>
                    <div className="flex flex-col">
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d1")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d2")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d3")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d4")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d5")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("hs_d6")}
                        </DlUiText>
                    </div>
                </div>
                <div className="max-w-[90%] max-md:mx-auto">
                    <Image
                        src={"/assets/images/roitels_img.png"}
                        alt="Roitels Experience"
                        width={200}
                        height={200}
                        className="mx-auto rounded-xl"
                    />
                    <DlUiText
                        type="h4"
                        className={`relative my-2 text-center ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                        Roitels - Frontend Developer
                    </DlUiText>
                    <DlUiText
                        type="h6"
                        className={`relative my-2 text-center ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                        07/2025 - 10/2025
                    </DlUiText>
                    <div className="flex flex-col">
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d1")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d2")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d3")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d4")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d5")}
                        </DlUiText>
                        <DlUiText
                            type="body1"
                            className={`relative my-2 text-left text-wrap ${theme === "light" ? "text-neutral-800" : "text-neutral-100"}`}>
                            {t("roi_d6")}
                        </DlUiText>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DlExperience;