import EventCard from "./EventCard";
import photo1 from "../../../assets/imgs/adem-001.jpg";
import photo2 from "../../../assets/imgs/adem-002.jpg";
import photo3 from "../../../assets/imgs/adem-003.jpg";

export default function EventsCarousel() {
  return (
    <div className="carousel-events flex gap-4">
      <EventCard image={photo1} title="Manos a la Roca" />
      <EventCard image={photo2} title="Tarde de Escalada" />
      <EventCard image={photo3} title="Cena Navideña" />
    </div>
  );
}
