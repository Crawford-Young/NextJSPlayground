import { FileCode } from "lucide-react";

export const ProjectButton = ({
  handleProjects,
}: {
  handleProjects: () => void;
}) => {
  return (
    <button className="projectsButton" onClick={() => handleProjects()}>
      <FileCode />
    </button>
  );
};
