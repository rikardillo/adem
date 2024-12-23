import fotoMiembros from "../../assets/imgs/adem-001.jpg";
import SectionContainer from "../../components/containers/SectionContainer";

export default function MemberSection() {
  return (
    <SectionContainer variant="blue">
      <div className="w-full max-w-[900px] px-4">
        <div className="max-w-lg space-y-4">
          <h2>Miembros</h2>
          <p>
            Somos un colectivo dedicado al desarrollo y evolución de la escalada
            en la República Dominicana.
          </p>
          <p>
            Velamos por la unión, cuidado y bienestar de nuestros miembros y
            rutas alrededor del país.
          </p>
          <p>Conoce más sobre los beneficios de pertenecer a la ADEM</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full max-h-[1000px] w-full max-w-[300px] overflow-hidden">
        <img src={fotoMiembros} alt="" />
      </div>
    </SectionContainer>
  );
}
