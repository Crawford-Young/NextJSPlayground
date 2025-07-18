import { Mail } from "lucide-react";

export const ContactButton = ({
  handleContact,
}: {
  handleContact: () => void;
}) => {
  return (
    <button className="contactButton" onClick={() => handleContact()}>
      <Mail />
    </button>
  );
};
