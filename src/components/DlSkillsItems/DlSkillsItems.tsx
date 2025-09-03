import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiText } from "@/components/ui/DlUiText";

interface DlSkillsItemsProps {
  name: string;
  image: string;
}

const DlSkillsItems = (props: DlSkillsItemsProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-20 h-max">
      <DlUiImage src={props.image} alt={props.name} width={90} height={90} />
      <DlUiText type="h3" className="text-center">
        {props.name}
      </DlUiText>
    </div>
  );
};

export default DlSkillsItems;
