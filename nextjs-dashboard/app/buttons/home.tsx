import { House } from "lucide-react";
import "./buttons.css";

export const Home = ({ handleHome }: { handleHome: () => void }) => {
  return (
    <button className="homeButton" onClick={() => handleHome()}>
      <House />
    </button>
  );
};
