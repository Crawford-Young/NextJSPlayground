import { Briefcase } from "lucide-react";

export const Work = ({ handleWork }: { handleWork: () => void }) => {
  return (
    <button className="workButton" onClick={() => handleWork()}>
      <Briefcase />
    </button>
  );
};
