import { useContext } from 'react'
import { Main } from 'tamagui'
import { ErrorSearch } from '~/components/errors/ErrorSearch'
import { BreweriesList } from '~/components/list/BreweriesList'
import { LikeContext } from '~/providers/LikeProvider'
import { Container } from '~/tamagui.config'


const FavoritesPage = () => {

    const { likeBreweries } = useContext(LikeContext)

    return (
        <Container>
            <Main alignItems='center'>
                {
                    likeBreweries.length === 0
                        ? <ErrorSearch />
                        : <BreweriesList breweries={likeBreweries} />
                }
            </Main>
        </Container>
    )
}

export default FavoritesPage