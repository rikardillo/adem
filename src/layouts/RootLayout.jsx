// RootLayout.js
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageContainer from "../components/containers/PageContainer";

export default function RootLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <main className="flex grow flex-col" layout>
        <PageContainer location={location} key={location.pathname}>
          {outlet}
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
