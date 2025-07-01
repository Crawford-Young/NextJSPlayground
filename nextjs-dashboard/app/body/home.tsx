import "./body.css";
import Image from "next/image";
import Headshot from "@/app/photos/profilePic.jpg";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Crawford Young</h1>
      <Image src={Headshot} alt="Me!" className="profile-circle" />
      <p>SWE</p>
    </div>
  );
};
