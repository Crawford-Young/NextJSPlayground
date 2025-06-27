import { UserRound } from "lucide-react";

export const Profile = ({ handleProfile }: { handleProfile: () => void }) => {
  return (
    <button className="profileButton" onClick={() => handleProfile()}>
      <UserRound />
    </button>
  );
};
