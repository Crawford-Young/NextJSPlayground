import { House } from "lucide-react";
import "./buttons.css";

export const HomeButton = ({ handleHome }: { handleHome: () => void }) => {
  return (
    <button className="homeButton" onClick={() => handleHome()}>
      <House />
    </button>
  );
};
