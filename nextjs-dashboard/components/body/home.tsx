import "./body.css";
import Image from "next/image";
import Headshot from "@/public/profilePic.jpg";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="name">Crawford Young</h1>
      <h3 className="title">Software Engineer</h3>
      <Image src={Headshot} alt="Me!" className="profile-circle" />
    </div>
  );
};
