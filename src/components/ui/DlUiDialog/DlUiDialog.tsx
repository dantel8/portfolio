import { helpers } from "@/utils/helpers";
import { Dialog, DialogProps } from "primereact/dialog";
import { HTMLAttributes, ReactNode } from "react";

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
            "!rounded-3xl bg-white shadow-lg",
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
            "!shadow-none hover:bg-neutral-100 transition-colors",
            classNames?.closeButton,
            (pt?.closeButton as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
        closeButtonIcon: {
          className: helpers.cn(
            "!text-neutral-900 !size-5",
            classNames?.closeIcon,
            (pt?.closeButtonIcon as HTMLAttributes<HTMLDivElement>)?.className
          ),
        },
      }}
      className={className}
      appendTo={document.body}
    >
      <hr
        className={helpers.cn(
          "absolute left-0 right-0 top-0 mx-6 border-neutral-200",
          classNames?.divider,
          pt?.hrHeader
        )}
      />

      {children}
    </Dialog>
  );
};

export default DlUiDialog;
