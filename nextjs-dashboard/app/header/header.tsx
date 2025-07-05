"use client";
import { HomeButton } from "../buttons/HomeButton";
import { ProfileButton } from "../buttons/ProfileButton";
import { WorkButton } from "../buttons/WorkButton";
import { ProjectButton } from "../buttons/ProjectButton";
import { ContactButton } from "../buttons/ContactButton";
import "./header.css";

interface HeaderProps {
  profileHeight: number;
  workHeight: number;
  projectHeight: number;
  contactHeight: number;
}

export default function Header({
  profileHeight,
  workHeight,
  projectHeight,
  contactHeight,
}: HeaderProps) {
  return (
    <div className="headerButtonContainer">
      <HomeButton
        handleHome={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <ProfileButton
        handleProfile={() => {
          window.scrollTo({ top: profileHeight, behavior: "smooth" });
        }}
      />
      <WorkButton
        handleWork={() => {
          window.scrollTo({ top: workHeight, behavior: "smooth" });
        }}
      />
      <ProjectButton
        handleProjects={() => {
          window.scrollTo({ top: projectHeight, behavior: "smooth" });
        }}
      />
      <ContactButton
        handleContact={() => {
          window.scrollTo({ top: contactHeight, behavior: "smooth" });
        }}
      />
    </div>
  );
}
