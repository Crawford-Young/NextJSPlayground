import { FileCode } from "lucide-react";

export const Projects = ({
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
