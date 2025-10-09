import { DlUiText } from "@/components/ui/DlUiText";

const DlFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <DlUiText type="body1" className="text-v1-primary-600">
        &copy; {new Date().getFullYear()} Dante Lugo. All rights reserved.
      </DlUiText>
    </div>
  );
};

export default DlFooter;
