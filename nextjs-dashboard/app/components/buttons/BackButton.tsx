import { ArrowLeft } from "lucide-react";

export const BackButton = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <button className="backButton" onClick={() => handleBack()}>
      <ArrowLeft />
    </button>
  );
};
