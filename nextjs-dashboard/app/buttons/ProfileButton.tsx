import { UserRound } from "lucide-react";

export const ProfileButton = ({
  handleProfile,
}: {
  handleProfile: () => void;
}) => {
  return (
    <button className="profileButton" onClick={() => handleProfile()}>
      <UserRound />
    </button>
  );
};
