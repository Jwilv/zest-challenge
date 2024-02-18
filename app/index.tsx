import { Container, Main } from "~/tamagui.config";
import { BreweriesPagination } from '../components/breweries/BreweriesPagination';


export default function Page() {

  return (
    <Container>
      <Main>
        <BreweriesPagination />
      </Main>
    </Container>
  );
}
