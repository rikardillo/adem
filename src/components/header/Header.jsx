import logo from "../../assets/logo-adem.svg";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="bg-adem-primary-950 sticky top-0 flex h-[4rem] w-full justify-between p-5">
      <img src={logo} className="h-full" />
      <NavBar />
    </div>
  );
}
