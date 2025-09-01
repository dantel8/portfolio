import { helpers } from "@/utils/helpers";
import { Skeleton, SkeletonProps } from "primereact/skeleton";

type DlUiSkeletonProps = SkeletonProps;
const DlUiSkeleton = ({ shape = "rectangle", ...props }: DlUiSkeletonProps) => {
  return (
    <Skeleton
      {...props}
      className={helpers.cn(
        "!mb-auto after:bg-slate-300",
        {
          "rounded-xl": shape === "rectangle",
        },
        props.className
      )}
      shape={shape}
    />
  );
};

export default DlUiSkeleton;
