import PageContainer from "../../components/containers/PageContainer";
import HeroSection from "./HeroSection";
import EventSection from "./EventSection";
import MemberSection from "./MemberSection";
import GuideSection from "./GuideSection";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventSection />
      <MemberSection />
      <GuideSection />
    </>
  );
}
