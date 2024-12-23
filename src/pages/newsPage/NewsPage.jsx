import SectionContainer from "../../components/containers/SectionContainer";
import ContentContainer from "../../components/containers/ContentContainer";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

export default function NewsPage() {
  return (
    <SectionContainer>
      <ContentContainer>
        <h3 className="w-full">Noticias</h3>

        <NewsList />
      </ContentContainer>
    </SectionContainer>
  );
}
