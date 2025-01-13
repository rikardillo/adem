import BenefitsList from "../../components/BenefitsList/BenefitsList";
import SectionContainer from "../../components/containers/SectionContainer";
import RegistrationForm from "../../components/forms/RegistrationForm";

export default function MembersPage() {
  return (
    <SectionContainer>
      <BenefitsList />
      <h3>Regístrate aquí</h3>
      <RegistrationForm />
    </SectionContainer>
  );
}
