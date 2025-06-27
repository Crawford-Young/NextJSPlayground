import { Mail } from "lucide-react";

export const Contact = ({ handleContact }: { handleContact: () => void }) => {
  return (
    <button className="contactButton" onClick={() => handleContact()}>
      <Mail />
    </button>
  );
};
