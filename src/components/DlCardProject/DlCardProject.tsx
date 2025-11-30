"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiButton } from "@/components/ui/DlUiButton";
import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlRenderSeeMore } from "@/components/DlRenderSeeMore";
import { getScreenshotUrl, ScreenshotService } from "@/utils/screenshotService";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

interface DlCardProjectProps {
  image?: string;
  title: string;
  description: string;
  link: string;
  useAutoPreview?: boolean;
  screenshotService?: ScreenshotService;
}

const DlCardProject = (props: DlCardProjectProps) => {
  const { t } = useTranslation("projects");
  const { theme } = useTheme();

  // Generar URL de preview automático si está habilitado
  const getPreviewImage = () => {
    if (props.image) return props.image;

    if (props.useAutoPreview && props.link) {
      return getScreenshotUrl(props.link, {
        service: props.screenshotService || "microlink",
        width: 1200,
        height: 630,
      });
    }

    return "/assets/images/default-project.png";
  };

  return (
    <div
      className={`flex flex-col gap-2 p-4 w-[600px] rounded-lg shadow-lg hover:shadow-xl transition-all ${
        theme === "light"
          ? "bg-white shadow-neutral-200 hover:shadow-neutral-300"
          : "bg-neutral-900 shadow-neutral-950 hover:shadow-black"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg ${
          theme === "light" ? "bg-neutral-100" : "bg-neutral-800"
        }`}
      >
        <DlUiImage
          src={getPreviewImage()}
          alt={props.title}
          width={400}
          height={400}
          imageClassName="w-[600px] h-auto object-cover"
        />
      </div>
      <DlUiText
        type="h4"
        className={theme === "light" ? "text-neutral-800" : "text-neutral-100"}
      >
        {props.title}
      </DlUiText>
      <DlRenderSeeMore
        content={props.description}
        maxWords={20}
        pt={{
          content: {
            type: "body1",
            className:
              theme === "light" ? "text-neutral-600" : "text-neutral-300",
          },
        }}
      />
      <DlUiButton
        label={t("view_project")}
        onClick={() => window.open(props.link, "_blank")}
        variant="outlined"
        className={theme === "light" ? "text-neutral-600" : "text-neutral-300"}
      />
    </div>
  );
};

export default DlCardProject;
