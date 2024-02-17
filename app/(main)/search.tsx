import { SearchBrewery } from "~/components/breweries/SearchBrewery"
import { Container, Main } from "~/tamagui.config"


const SearchPage = () => {
    return (
        <Container>
            <Main alignItems='center'>
                <SearchBrewery />
            </Main>
        </Container>
    )
}

export default SearchPage