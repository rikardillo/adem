import { ReactNode } from "react";
import { Link } from "react-router-dom";

type IconLinkProps = {
  icon: ReactNode;
  to: string;
};

export default function IconLink({ icon, to }: IconLinkProps) {
  return (
    <Link
      to={to}
      className="text-[2rem] transition-all duration-100 hover:scale-110 hover:text-adem-secondary-400"
    >
      {icon}
    </Link>
  );
}
