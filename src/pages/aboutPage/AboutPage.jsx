import { Outlet } from "react-router-dom";
import SectionContainer from "../../components/containers/SectionContainer";
import NavItem from "../../components/ui/buttons/NavItem";

function AboutNav() {
  return (
    <nav className="flex gap-4 font-light uppercase">
      <NavItem to="sobre">Nosotros</NavItem>
      <NavItem to="directiva">Directiva</NavItem>
      <NavItem to="documentos">Documentos</NavItem>
    </nav>
  );
}

export default function AboutPage() {
  return (
    <SectionContainer variant="blue" className='grow'>
      <AboutNav />
      <Outlet />
    </SectionContainer>
  );
}
