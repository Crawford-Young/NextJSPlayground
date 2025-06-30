"use client";
import Header from "./header/header";
import Body from "./body/body";
import "./page.css";

export default function Page() {
  return (
    <div className="pageContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <Body />
    </div>
  );
}
