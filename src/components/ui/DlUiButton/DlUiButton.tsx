import { helpers } from "@/utils/helpers";
import { Button, ButtonProps } from "primereact/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonVariants: any = {
  variants: {
    common: {
      root: "focus:shadow-none items-center justify-center gap-1",
      label: "font-medium flex-none",
    },
    variant: {
      primary: {
        root: "bg-v1-primary-200 !border-transparent hover:bg-v1-primary-400",
        label: "text-white",
      },
      secondary: {
        root: "bg-v1-secondary-400 !border-transparent hover:bg-v1-secondary-300",
        label: "text-v1-primary-950 font-medium",
      },
      outlined: {
        root: "border border-v1-primary-600 hover:bg-v1-primary-600/10",
        label: "text-v1-primary-600",
      },
      "outlined-secondary": {
        root: "border bg-transparent border-v1-neutral-0 hover:bg-v1-neutral-0/10 hover:border-v1-neutral-0",
        label: "text-v1-neutral-0",
      },
      filled: {
        root: "bg-white border-none hover:bg-v1-secondary-400",
        label: "text-v1-primary-950 font-semibold",
      },
      destructive: {
        root: "bg-v1-error-400 !border-transparent hover:bg-v1-error-600",
        label: "text-v1-neutral-0 font-medium",
      },
      "destructive-outlined": {
        root: "!bg-transparent !border-v1-error-400 hover:bg-v1-error-600",
        label: "!text-v1-error-400 font-medium",
      },
    },
    size: {
      default: {
        root: "h-10 !px-3 py-2",
      },
      sm: {
        root: "h-8 !px-2 text-sm",
      },
      lg: { root: "h-12 !px-4" },
      icon: {
        root: "size-9",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
};

interface DlUiButtonProps extends Omit<ButtonProps, "size"> {
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "outlined-secondary"
    | "filled"
    | "destructive"
    | "destructive-outlined";
  label?: string;
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const DlUiButton = ({
  variant = "primary",
  size = "default",
  children,
  ...props
}: DlUiButtonProps) => {
  const rootClassName = helpers.cn(
    buttonVariants.variants.common.root,
    buttonVariants.variants.variant[variant].root,
    buttonVariants.variants.size[size].root
  );
  const labelClassName = helpers.cn(
    buttonVariants.variants.common.label,
    buttonVariants.variants.variant[variant].label,
    buttonVariants.variants.size[size].label
  );

  return (
    <Button
      {...props}
      className={`${props.className || ""} !rounded-full`}
      unstyled
      outlined={variant === "outlined"}
      pt={{
        root: {
          className: rootClassName,
        },
        label: {
          className: labelClassName,
        },
        loadingIcon: {
          className: helpers.cn("", labelClassName),
        },
        ...props.pt,
      }}
    >
      {children}
    </Button>
  );
};

export default DlUiButton;
