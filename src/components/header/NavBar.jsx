import { NavLink } from "react-router-dom";

function NavItem({ children, to }) {
  return <NavLink to={"/"}>{children}</NavLink>;
}

export default function NavBar() {
  return (
    <nav className="text-white">
      <ul className="flex h-full items-center gap-4 text-[.8rem] font-light uppercase">
        <NavItem to="">nosotros</NavItem>
        <NavItem to="">noticias</NavItem>
        <NavItem to="">eventos</NavItem>
        <NavItem to="">galería</NavItem>
        <NavItem to="">membresía</NavItem>
        <NavItem to="">contacto</NavItem>
      </ul>
    </nav>
  );
}
