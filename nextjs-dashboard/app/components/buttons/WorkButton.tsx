import { Briefcase } from "lucide-react";

export const WorkButton = ({ handleWork }: { handleWork: () => void }) => {
  return (
    <button className="workButton" onClick={() => handleWork()}>
      <Briefcase />
    </button>
  );
};
