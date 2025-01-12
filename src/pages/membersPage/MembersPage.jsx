import BenefitsList from "../../components/BenefitsList/BenefitsList";
import SectionContainer from "../../components/containers/SectionContainer";

export default function MembersPage() {
  return (
    <SectionContainer>
      <h3>Beneficios membresía ADEM:</h3>
      <p>Conoce los beneficios de ser miembro de ADEM!</p>
      <BenefitsList />
      <h3>Regístrate aquí</h3>
    </SectionContainer>
  );
}
