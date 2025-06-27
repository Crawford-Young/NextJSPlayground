"use client";
import { Home } from "../buttons/home";
import { useState } from "react";
import "./header.css";

export default function Page() {
  const [home, setHome] = useState(false);
  return (
    <div className="headerContainer">
      <Home
        handleHome={() => {
          setHome(!home);
        }}
      />
    </div>
  );
}
