import { helpers } from "@/utils/helpers";
import { InputText, InputTextProps } from "primereact/inputtext";
import DlUiIcon from "@/components/ui/DlUiIcon/DlUiIcon";

export type DlUiInputProps = InputTextProps & {
  icon?: string;
  iconSource?: "lucide" | "material" | "custom";
  label?: string;
  required?: boolean;
  className?: string;
  classNames?: {
    label?: string;
    asterisk?: string;
    input?: string;
    container?: string;
  };
  color?: "outlined-primary";
  variant?: "filled" | "outlined";
};

const DlUiInput = ({
  value,
  onChange,
  className,
  classNames,
  icon,
  iconSource = "material",
  color,
  variant,
  ...props
}: DlUiInputProps) => {
  return (
    <div
      className={helpers.cn(
        "relative flex flex-1 flex-col",
        classNames?.container
      )}
    >
      {props.label && (
        <label
          htmlFor={props.name}
          className={helpers.cn(
            "block text-base font-medium text-v1-neutral-950",
            classNames?.label
          )}
        >
          {props.label || ""}
          {props.required && (
            <b
              className={helpers.cn(
                "ml-1 text-v1-secondary-400 opacity-90",
                classNames?.asterisk,
                {
                  "text-v1-primary-600": color === "outlined-primary",
                }
              )}
            >
              *
            </b>
          )}
        </label>
      )}
      <div className="relative">
        {icon && (
          <DlUiIcon
            materialIcon={icon}
            source={iconSource}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-v1-neutral-300"
            size={20}
          />
        )}
        <InputText
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          onKeyDown={props.onKeyDown}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={onChange}
          className={helpers.cn(
            "h-12 w-full !rounded-xl focus:shadow-none outline-none px-4 border border-neutral-300",
            {
              "!pl-12": Boolean(icon),
              "text-v1-neutral-950 hover:!border-v1-primary-600 focus:!border-v1-primary-600":
                color === "outlined-primary",
              "border-none !bg-v1-neutral-50": variant === "filled",
            },
            className,
            classNames?.input
          )}
          pt={{
            root: {
              className: "shadow-none",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DlUiInput;
