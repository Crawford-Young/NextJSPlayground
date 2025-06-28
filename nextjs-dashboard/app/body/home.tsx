import "./body.css";
import Image from "next/image";
import CampHeadshot from "@/app/photos/CampHeadshot.jpg";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Crawford Young</h1>
      <Image src={CampHeadshot} alt="Me!" />
      <p>SWE</p>
    </div>
  );
};
