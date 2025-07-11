import { ArrowLeft } from "lucide-react";
import "./buttons.css";

export const BackButton = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <button className="button" onClick={() => handleBack()}>
      <ArrowLeft />
    </button>
  );
};
