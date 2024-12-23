import { HiOutlineLocationMarker } from "react-icons/hi";
import { WiTime4 } from "react-icons/wi";

function InfoContainer({ icon, text }) {
  return (
    <div className="mt-2 flex items-center gap-2">
      <i className="text-[2rem]">{icon}</i>
      <p className="flex items-center gap-2">{text}</p>
    </div>
  );
}

export default function EventCard({ image, title }) {
  console.log(image);

  return (
    <div
      style={{
        backgroundImage: `url('${image}'`,
      }}
      className={`flex h-[30rem] max-w-[300px] cursor-pointer items-end overflow-hidden rounded-lg bg-cover text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-lg`}
    >
      <div className="z-10 bg-gradient-to-t from-black to-black/0 p-6 text-sm uppercase">
        <p className="text-[1.2rem] font-black">{title}</p>
        <InfoContainer icon={<WiTime4 />} text="Sábado 14 | 9am - 12pm" />
        <InfoContainer
          icon={<HiOutlineLocationMarker />}
          text="Escalada 3 Parque Mirador Sur"
        />
      </div>
    </div>
  );
}
