import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiText } from "@/components/ui/DlUiText";
import { helpers } from "@/utils/helpers";
import { useTheme } from "@/context/ThemeContext";

interface DlSkillsItemsProps {
  name: string;
  image: string;
  className?: string;
  imgClassName?: string;
}

const DlSkillsItems = (props: DlSkillsItemsProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={helpers.cn(
        "flex flex-col gap-2 items-center justify-center w-20 h-max",
        props.className
      )}
    >
      <DlUiImage
        src={props.image}
        alt={props.name}
        width={90}
        height={90}
        className={props.imgClassName}
      />
      <DlUiText
        type="h3"
        className={`text-center text-base ${
          theme === "light" ? "text-neutral-800" : "text-neutral-200"
        }`}
      >
        {props.name}
      </DlUiText>
    </div>
  );
};

export default DlSkillsItems;
