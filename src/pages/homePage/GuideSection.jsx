import SectionContainer from "../../components/containers/SectionContainer";

export default function GuideSection() {
  return (
    <SectionContainer as="section">
      <div className="flex w-full max-w-[900px]">
        <div className="max-w-[600px] space-y-4">
          <h2>Donde Escalar</h2>
          <p>
            Nuestros miembros cuentan con acceso a nuestra topoguía digital
            disponible aquí mismo en nuestra página. Donde podrás explorar los
            distintos sectores asignados y encontrar nuevas y más emocionantes
            aventuras.
          </p>
          <p>
            Nuestra topoguía siempre está en constante crecimiento. Únete a la
            gran familia de escalada quisqueyana y mantente informado de las
            emocionantes novedades!
          </p>
        </div>
        <div className="h-full w-full max-w-[260px] bg-gray-200">
          {" "}
          something
        </div>
      </div>
    </SectionContainer>
  );
}
