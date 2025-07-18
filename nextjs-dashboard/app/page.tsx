"use client";
import Header from "./components/header/header";
import Body from "./components/body/body";
import "./page.css";

export default function Page() {
  return (
    <div className="pageContainer">
      <div className="headerContainer">
        <Header
          profileHeight={100}
          workHeight={200}
          projectHeight={300}
          contactHeight={400}
        />
      </div>
      <div className="bodyContainer">
        <Body />
      </div>
    </div>
  );
}
