import { helpers } from "@/utils/helpers";
import React from "react";

export type DlUiTextProps = {
  type?:
    | "display1"
    | "display-subtitle-1"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "label1"
    | "label2"
    | "label3"
    | "label4"
    | "label5"
    | "label6"
    | "label7"
    | "caption1"
    | "caption2";
  id?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
};

const DlUiText: React.FC<DlUiTextProps> = ({
  type = "body1",
  className = "",
  id,
  children,
  dangerouslySetInnerHTML,
  style,
}) => {
  switch (type) {
    case "display1":
      return (
        <h1
          className={helpers.cn(
            "text-4xl font-bold leading-[50px] text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h1>
      );
    case "display-subtitle-1":
      return (
        <h2
          className={helpers.cn(
            "text-[1.75rem] font-light leading-10 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h2>
      );
    case "h1":
      return (
        <h1
          className={helpers.cn(
            "text-[1.75rem] font-semibold leading-9 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={helpers.cn(
            "text-2xl font-semibold leading-8 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={helpers.cn(
            "text-xl font-semibold leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={helpers.cn(
            "text-lg font-normal leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={helpers.cn(
            "text-[17px] font-normal leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={helpers.cn(
            "text-base font-normal leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </h6>
      );
    case "body1":
      return (
        <p
          className={helpers.cn(
            "text-base font-normal leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </p>
      );
    case "body2":
      return (
        <p
          className={helpers.cn(
            "text-sm font-normal leading-5 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </p>
      );
    case "label1":
      return (
        <label
          className={helpers.cn(
            "text-base font-semibold leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label2":
      return (
        <label
          className={helpers.cn(
            "text-base font-normal leading-6 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label3":
      return (
        <label
          className={helpers.cn(
            "text-sm font-semibold uppercase leading-5 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label4":
      return (
        <label
          className={helpers.cn(
            "text-sm font-semibold leading-5 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label5":
      return (
        <label
          className={helpers.cn(
            "text-sm font-normal leading-5 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label6":
      return (
        <label
          className={helpers.cn(
            "text-xs font-medium leading-4 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "label7":
      return (
        <label
          className={helpers.cn(
            "text-md font-[500] text-primary-600",
            className
          )}
          style={style}
          id={id}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </label>
      );
    case "caption1":
      return (
        <span
          className={helpers.cn(
            "text-sm font-normal leading-5 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </span>
      );
    case "caption2":
      return (
        <span
          className={helpers.cn(
            "text-xs font-medium leading-4 text-neutral-700",
            className
          )}
          id={id}
          style={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children}
        </span>
      );
    default:
      return null;
  }
};

export default DlUiText;
