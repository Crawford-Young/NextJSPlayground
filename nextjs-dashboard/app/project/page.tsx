"use client";
import ProjectHeader from "../components/header/ProjectHeader";
import { ProjectCard } from "../components/body/ProjectCard";
import "../components/body/body.css";

export default function Page() {
  return (
    <div>
      <ProjectHeader />
      <div className="generalContainer">
        <h3 className="title">Projects</h3>
        <ProjectCard
          title="Personal Portfolio Website"
          description="A personal website to showcase my work and experience. Built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          title="Events App"
          description="A web app for managing and discovering events. Features real-time updates and user authentication."
        />
        <ProjectCard
          title="Guitar Tuner"
          description="A simple and accurate guitar tuner built with React and Web Audio API."
        />
        {/* Add more <ProjectCard />s as needed */}
      </div>
    </div>
  );
}
