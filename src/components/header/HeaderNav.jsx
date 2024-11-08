import NavItem from "../ui/buttons/NavItem";

export default function NavBar() {
  return (
    <nav className="text-white h-full">
      <ul className="flex h-full items-center gap-4 text-[.8rem] font-light uppercase">
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
