import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className="w-[6rem] text-center transition-all duration-300 hover:font-bold hover:text-adem-secondary-400"
    >
      {children}
    </NavLink>
  );
}
