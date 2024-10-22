import EventCard from "../components/event-card/EventCard";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-adem-primary-900 flex h-[80vh] items-center leading-[4rem]">
        <h1 className="w-full text-right text-[4rem] font-black uppercase text-white">
          encuentra <br /> tu siguiente
          <br /> proyecto
        </h1>
      </section>
      <section className="flex w-full justify-center bg-neutral-600 py-[6rem]">
        <div className="w-full max-w-[900px]">
          <div>
            <h2>Próximos Eventos</h2>
            <p>
              Suscríbete y síguenos para enterarte de los próximos eventos de
              escalada
            </p>
          </div>
          <div className="carousel-events">
            <EventCard />
          </div>
        </div>
      </section>
    </main>
  );
}
