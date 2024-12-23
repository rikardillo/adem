import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

type BackButtonProps = {
  text: string;
};

function BackButton({ text }: BackButtonProps) {
  return (
    <Link
      to=".."
      relative="path"
      className="flex w-auto flex-grow-0 items-center gap-2 self-start p-2 transition-colors duration-300 hover:text-adem-primary-900"
    >
      <FaChevronLeft />
      {text}
    </Link>
  );
}

export default BackButton;
