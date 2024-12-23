import { useParams } from "react-router-dom";
import SectionContainer from "../../components/containers/SectionContainer";
import ContentContainer from "../../components/containers/ContentContainer";
import BackButton from "../../components/ui/buttons/BackButton";

export default function NewsArticle() {
  const params = useParams();

  return (
    <SectionContainer>
      <ContentContainer>
        <BackButton text='Volver a Noticias' />
        <h3>Artículo de Noticias</h3>
        <p>Showing article with id: {params.articleId}</p>
      </ContentContainer>
    </SectionContainer>
  );
}
