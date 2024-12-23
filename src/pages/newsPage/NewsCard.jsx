import { Link } from "react-router-dom";

export default function NewsCard({ title, date, description, to }) {
  return (
    <Link
      to={to}
      className="w-full cursor-pointer select-none rounded-sm p-4 transition-colors duration-300 hover:bg-adem-primary-100"
    >
      <h4>{title}</h4>
      <p className="font-bold uppercase">{date}</p>
      <p>{description}</p>
    </Link>
  );
}
