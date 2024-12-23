import NewsCard from "./NewsCard";

// Dummy data --- To be removed

const ARTICLES = [
  {
    id: "01",
    title: "titulo 01",
    date: "12 de noviembre, 2024",
    description: "",
  },
  {
    id: "02",
    title: "titulo 02",
    date: "15 de noviembre, 2024",
    description: "",
  },
  {
    id: "03",
    title: "titulo 03",
    date: "4 de diciembre, 2024",
    description: "",
  },
];

export default function NewsList({ children }) {
  return (
    <ul className="flex w-full flex-col divide-y-2">
      {ARTICLES.map((article) => {
        return (
          <NewsCard
            to={article.id}
            title={article.title}
            date={article.date}
            description={article.description}
          />
        );
      })}
    </ul>
  );
}
