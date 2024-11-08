import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
