import SectionContainer from "../../components/containers/SectionContainer";
import EventsCarousel from "../../pages/homePage/events/EventsCarousel";
import Button from "../../components/ui/buttons/Button";

export default function EventSection() {
  return (
    <SectionContainer as="section">
      <div className="flex w-full max-w-[900px] flex-col items-center gap-8">
        <div className="w-full">
          <h2>Próximos Eventos</h2>
          <p>
            Suscríbete y síguenos para enterarte de los próximos eventos de
            escalada
          </p>
        </div>
        <EventsCarousel />
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="rounded-lg bg-gray-200 px-3 py-2"
          />
          <Button>Suscríbete</Button>
        </div>
      </div>
    </SectionContainer>
  );
}
