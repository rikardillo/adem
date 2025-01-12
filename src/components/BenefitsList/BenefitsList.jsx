import BenefitsItem from "./BenefitsItem";

const benefits = [
  "Descuentos en establecimientos",
  "Descuentos en Membresías Al Límite",
  "Descuentos en Viajes",
  "Participación en eventos selectos",
  "Acceso a nuestra topoguía digital",
];

export default function BenefitsList() {
  return (
    <ul className="flex list-inside list-disc flex-col gap-2">
      {benefits.map((benefit) => (
        <BenefitsItem text={benefit} />
      ))}
    </ul>
  );
}
