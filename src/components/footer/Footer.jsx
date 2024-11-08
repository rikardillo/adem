import IconLink from "../ui/links/IconLink.tsx";
import SectionContainer from "../containers/SectionContainer.jsx";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <SectionContainer
      as="footer"
      variant="blue"
      className="flex-col items-center gap-4"
    >
      <h3>síguenos en nuestras redes sociales</h3>

      <div className="social-icons flex gap-4">
        <IconLink
          icon={<FaInstagram />}
          to="https://www.instagram.com/adem.oficial/"
        />
        <IconLink icon={<FaYoutube />} to="" />
        <IconLink icon={<FaTwitter />} to="" />
      </div>
    </SectionContainer>
  );
}
