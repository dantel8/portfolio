import { helpers } from "@/utils/helpers";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import React from "react";
import { DlUiIcon } from "../DlUiIcon";
import { LucideProps } from "lucide-react";

export type DlUiTextAreaProps = InputTextareaProps & {
  icon?: React.ElementType<LucideProps>;
  label?: string;
  required?: boolean;
  className?: string;
  classNames?: {
    container?: string;
    label?: string;
    asterisk?: string;
    counter?: string;
    input?: string;
  };
};

const DlUiTextArea = ({
  value,
  onChange,
  className,
  icon,
  classNames,
  ...props
}: DlUiTextAreaProps) => {
  return (
    <div
      className={helpers.cn(
        "relative flex flex-1 flex-col gap-1",
        classNames?.container
      )}
    >
      {/* Label y asterisco requerido */}
      {props.label && (
        <label
          htmlFor={props.name}
          className={helpers.cn(
            "block text-base font-medium text-neutral-950",
            classNames?.label
          )}
        >
          {props.label}
          {props.required && (
            <b
              className={helpers.cn(
                "ml-1 text-primary-500",
                classNames?.asterisk
              )}
            >
              *
            </b>
          )}
        </label>
      )}

      {/* Contenedor del textarea con icono */}
      <div className="relative">
        {icon && (
          <DlUiIcon
            lucideIcon={icon}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-neutral-400"
            size={20}
          />
        )}

        {/* Contador de caracteres */}
        {props.maxLength && (
          <span
            className={helpers.cn(
              "absolute bottom-2 right-2 text-sm",
              value?.toString().length === props.maxLength
                ? "text-error-500"
                : "text-neutral-400",
              classNames?.counter
            )}
          >
            {value?.toString().length || 0}/{props.maxLength}
          </span>
        )}

        {/* Textarea */}
        <InputTextarea
          {...props}
          value={value}
          onChange={onChange}
          className={helpers.cn(
            "w-full min-h-[120px] rounded-lg border border-neutral-300 transition-colors",
            "hover:border-neutral-400 focus:border-primary-500 focus:shadow-none",
            {
              "pl-12": Boolean(icon),
              "pr-16": Boolean(props.maxLength),
            },
            classNames?.input,
            className
          )}
          pt={{
            root: {
              className: "shadow-none resize-y",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DlUiTextArea;
