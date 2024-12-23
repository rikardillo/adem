import photo from "../../assets/imgs/directiva/Ricardo-Dominguez.jpg";

function Name({ children }) {
  return <p className="font-black uppercase leading-4"> {children}</p>;
}
function Position({ children }) {
  return (
    <p className="text-xs font-light uppercase text-gray-400"> {children}</p>
  );
}

function ProfileCard({ name, lastName, position }) {
  return (
    <div className="max-w-[12rem] overflow-hidden rounded-lg bg-white text-black transition-transform duration-200 hover:scale-105">
      <img src={photo} alt="" />
      <div className="p-4 uppercase">
        <Name>{name}</Name>
        <Name>{lastName}</Name>
        <Position>{position}</Position>
      </div>
    </div>
  );
}

export default function Directiva() {
  return (
    <div className="w-full space-y-4 font-light">
      <h3 className="w-full">Directiva 2024-2025</h3>
      <p className="columns-2">
        La directiva de ADEM, Asociación Dominicana de Escalada y Montañismo,
        promueve prácticas seguras y responsables de escalada y montañismo en el
        país, organizando talleres, eventos y actividades formativas para todos
        los niveles. Además, fomenta el cuidado del medio ambiente y establece
        alianzas con entidades nacionales e internacionales para fortalecer sus
        recursos y conocimientos en beneficio de la comunidad de escaladores.
      </p>
      <p>Actualmente en el ciclo 2024-2025 está compuesta por:</p>
      <div className="flex justify-between gap-4">
        <ProfileCard name="Luis" lastName="Morales" position="Presidente" />
        <ProfileCard name="Gadea" lastName="Pérez" position="Vice-Presidente" />
        <ProfileCard name="Miguel" lastName="Roa" position="Tesorero" />
        <ProfileCard name="Paola" lastName="Seguel" position="Secretaria" />
        <ProfileCard name="Ricardo" lastName="Domínguez" position="Vocal" />
      </div>
    </div>
  );
}
