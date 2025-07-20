import { ArrowLeft } from "lucide-react";
import "./buttons.css";

export const BackButton = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <button className="backButton" onClick={() => handleBack()}>
      <ArrowLeft />
    </button>
  );
};
