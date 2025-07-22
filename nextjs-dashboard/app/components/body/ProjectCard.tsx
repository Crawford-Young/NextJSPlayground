import React from "react";
import "./body.css";

interface ProjectCardProps {
  title: string;
  description?: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="projectCardContainer">
      <h4 className="projectTitle">{title}</h4>
      {description && <p className="projectDescription">{description}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          View Project
        </a>
      )}
    </div>
  );
};
