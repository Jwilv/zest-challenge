import { useContext } from 'react'
import { Main } from 'tamagui'
import { BreweriesList } from '~/components/list/BreweriesList'
import { LikeContext } from '~/providers/LikeProvider'
import { Container } from '~/tamagui.config'


const FavoritesPage = () => {

    const likeBreweries = useContext(LikeContext)

    return (
        <Container>
            <Main alignItems='center'>
                <BreweriesList
                    breweries={likeBreweries}
                />
            </Main>
        </Container>
    )
}

export default FavoritesPage