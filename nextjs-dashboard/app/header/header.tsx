"use client";
import { Home } from "../buttons/home";
import { Profile } from "../buttons/profile";
import { useState } from "react";
import "./header.css";

export default function Page() {
  const [home, setHome] = useState(false);
  const [profile, setProfile] = useState(false);
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
    </div>
  );
}
