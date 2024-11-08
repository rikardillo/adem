import SectionContainer from "../containers/SectionContainer";
import logo from "../../assets/logo-adem.svg";
import HeaderNav from "./HeaderNav";
import { NavLink } from "react-router-dom";

function LogoLink() {
  return (
    <NavLink to="/">
      <img
        src={logo}
        className="absolute left-4 top-[50%] h-[1.6rem] translate-y-[-50%]"
      />
    </NavLink>
  );
}

function HeaderContainer({ children }) {
  return (
    <header className="sticky top-0 z-10 flex h-[4rem] w-full items-center justify-center bg-gradient-to-r from-adem-primary-950 to-adem-primary-700 py-1">
      {children}
    </header>
  );
}

export default function Header() {
  return (
    <HeaderContainer>
      <LogoLink />
      <HeaderNav />
    </HeaderContainer>
  );
}
