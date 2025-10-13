"use client";

import { helpers } from "@/utils/helpers";
import { Dialog, DialogProps } from "primereact/dialog";
import { HTMLAttributes, ReactNode, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export interface DlUiDialogProps {
  children: ReactNode;
  onClose: () => void;
  header?: ReactNode | ((props: DialogProps) => ReactNode);
  pt?: DialogProps["pt"] & {
    hrHeader?: string;
  };
  className?: string;
  alignment?: "left" | "right" | "center";
  width?: string;
  visible?: boolean;
  classNames?: {
    root?: string;
    header?: string;
    content?: string;
    closeButton?: string;
    closeIcon?: string;
    divider?: string;
    mask?: string;
  };
}

const DlUiDialog = ({
  children,
  header,
  pt,
  className,
  onClose,
  alignment = "center",
  width = "90%",
  visible = false,
  classNames,
}: DlUiDialogProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!visible) {
      document.body.classList.remove("overflow-hidden");
      return;
    }
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visible]);

  return (
    <Dialog
      header={header}
      visible={visible}
      onHide={onClose}
      style={{ width }}
      draggable={false}
      position={alignment}
      pt={{
        root: {
          className: helpers.cn(
            "!rounded-3xl shadow-lg",
            theme === "light" ? "bg-white" : "bg-neutral-900",
            classNames?.root,
            (pt?.root as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        header: {
          className: helpers.cn(
            "!rounded-t-3xl border-b-0 p-6",
            classNames?.header,
            (pt?.header as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        content: {
          className: helpers.cn(
            "pt-6 !rounded-b-3xl relative",
            classNames?.content,
            (pt?.content as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        closeButton: {
          className: helpers.cn(
            "!shadow-none transition-colors",
            theme === "light" ? "hover:bg-neutral-100" : "hover:bg-neutral-800",
            classNames?.closeButton,
            (pt?.closeButton as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        closeButtonIcon: {
          className: helpers.cn(
            "!size-5",
            theme === "light" ? "!text-neutral-900" : "!text-neutral-100",
            classNames?.closeIcon,
            (pt?.closeButtonIcon as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        mask: {
          className: helpers.cn(
            "backdrop-blur-md bg-black/30",
            classNames?.mask,
            (pt?.mask as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
      }}
      className={className}
      appendTo={document.body}
    >
      <hr
        className={helpers.cn(
          "absolute left-0 right-0 top-0 mx-6",
          theme === "light" ? "border-neutral-200" : "border-neutral-700",
          classNames?.divider,
          pt?.hrHeader
        )}
      />

      {children}
    </Dialog>
  );
};

export default DlUiDialog;
