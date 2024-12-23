import NavItem from "../ui/buttons/NavItem";

export default function NavBar() {
  return (
    <nav className="flex h-full items-center text-white">
      <ul className="flex gap-4 rounded-full bg-gradient-to-r from-adem-primary-950 to-adem-primary-700 p-3 text-[.8rem] font-light uppercase">
        <NavItem to="nosotros/sobre">nosotros</NavItem>
        <NavItem to="noticias">noticias</NavItem>
        <NavItem to="eventos">eventos</NavItem>
        <NavItem to="galeria">galería</NavItem>
        <NavItem to="miembros">miembros</NavItem>
        <NavItem to="contacto">contacto</NavItem>
      </ul>
    </nav>
  );
}
