"use client";

import { useState, useRef, useEffect } from "react";
import { DlUiText } from "@/components/ui/DlUiText";
import { useTranslation } from "react-i18next";
import { helpers } from "@/utils/helpers";
import { DlUiTextProps } from "@/components/ui/DlUiText/DlUitext";

interface DlRenderSeeMoreProps {
  content: string;
  maxWords?: number;
  maxHeight?: number;
  namespace?: string;
  scrollToTopOnCollapse?: boolean;
  onToggle?: (isExpanded: boolean) => boolean | void;
  pt?: {
    [key: string]: {
      type?: DlUiTextProps["type"];
      className?: string;
    };
  };
  className?: string;
}

const DlRenderSeeMore = ({
  content,
  maxWords = 20,
  maxHeight = 150,
  namespace = "projects",
  scrollToTopOnCollapse = false,
  pt,
  onToggle,
  className,
}: DlRenderSeeMoreProps) => {
  const { t } = useTranslation(namespace);
  const contentRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const words = content.split(" ");
  const firstPart = words.slice(0, maxWords).join(" ");
  const remainingText = words.slice(maxWords).join(" ");

  const handleToggleShowMore = () => {
    const newShowMore = !showMore;
    const parentHandled = onToggle?.(newShowMore);
    if (!parentHandled) {
      setShowMore(newShowMore);

      // Si está colapsando y scrollToTopOnCollapse está activo
      if (!newShowMore && scrollToTopOnCollapse) {
        // Hacer scroll al top de la página
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isOverflow = contentRef.current.scrollHeight > maxHeight;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [content, maxHeight]);

  const shouldShowMore =
    isOverflowing || (!isOverflowing && remainingText.length > 0);
  const displayContent = showMore
    ? content
    : isOverflowing
    ? content
    : firstPart;

  return (
    <div className={helpers.cn("", pt?.root?.className, className)}>
      <div
        ref={contentRef}
        className={helpers.cn("transition-all duration-300 overflow-hidden")}
        style={{
          maxHeight: !showMore ? `${maxHeight}px` : "none",
        }}
      >
        <DlUiText
          type={pt?.content?.type || "body1"}
          className={helpers.cn("whitespace-pre-line", pt?.content?.className)}
        >
          {displayContent}
        </DlUiText>
      </div>
      <div className="flex items-center justify-end">
        {!showMore && shouldShowMore && (
          <DlUiText
            type={pt?.text?.type || "body1"}
            className={helpers.cn("inline", pt?.content?.className)}
          >
            ...{" "}
          </DlUiText>
        )}
        {shouldShowMore && (
          <span
            className={helpers.cn(
              "inline-block cursor-pointer px-2 font-medium text-v1-primary-500 hover:text-v1-primary-400 transition-colors",
              pt?.content?.className
            )}
            onClick={handleToggleShowMore}
          >
            {showMore ? t("see_less") : t("see_more")}
          </span>
        )}
      </div>
    </div>
  );
};

export default DlRenderSeeMore;
