import { useContext } from 'react'
import { BreweryInfo } from '~/components/breweries/BreweryInfo';
import { BreweryContext } from '~/providers/BreweryProvider';

import { Container, Main } from '~/tamagui.config';

const BreweryByIdPage = () => {

    const brewery = useContext(BreweryContext);

    return (
        <Container>
            <Main>
                <BreweryInfo
                    brewery={brewery}
                />
            </Main>
        </Container>
    )
}

export default BreweryByIdPage