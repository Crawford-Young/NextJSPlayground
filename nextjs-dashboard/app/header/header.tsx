"use client";
import { useState } from "react";
import { HomeButton } from "../buttons/HomeButton";
import { ProfileButton } from "../buttons/ProfileButton";
import { WorkButton } from "../buttons/WorkButton";
import { ProjectButton } from "../buttons/ProjectButton";
import { ContactButton } from "../buttons/ContactButton";
import "./header.css";

export default function Page() {
  const [home, setHome] = useState(false);
  const [profile, setProfile] = useState(false);
  const [work, setWork] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="headerButtonContainer">
      <HomeButton
        handleHome={() => {
          setHome(!home);
        }}
      />
      <ProfileButton
        handleProfile={() => {
          setProfile(!profile);
        }}
      />
      <WorkButton
        handleWork={() => {
          setWork(!work);
        }}
      />
      <ProjectButton
        handleProjects={() => {
          setProjects(!projects);
        }}
      />
      <ContactButton
        handleContact={() => {
          setContact(!contact);
        }}
      />
    </div>
  );
}
