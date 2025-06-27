"use client";
import { useState } from "react";
import { Home } from "../buttons/home";
import { Profile } from "../buttons/profile";
import { Work } from "../buttons/work";
import { Projects } from "../buttons/projects";
import { Contact } from "../buttons/contact";
import "./header.css";

export default function Page() {
  const [home, setHome] = useState(false);
  const [profile, setProfile] = useState(false);
  const [work, setWork] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="headerContainer">
      <Home
        handleHome={() => {
          setHome(!home);
        }}
      />
      <Profile
        handleProfile={() => {
          setProfile(!profile);
        }}
      />
      <Work
        handleWork={() => {
          setWork(!work);
        }}
      />
      <Projects
        handleProjects={() => {
          setProjects(!projects);
        }}
      />
      <Contact
        handleContact={() => {
          setContact(!contact);
        }}
      />
    </div>
  );
}
