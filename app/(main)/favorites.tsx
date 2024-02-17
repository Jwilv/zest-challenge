import React from 'react'
import { Main } from 'tamagui'
import { LikeProvider } from '~/providers/LikeProvider'
import { Container } from '~/tamagui.config'

const FavoritesPage = () => {
    return (
        <LikeProvider>
            <Container>
                <Main>

                </Main>
            </Container>
        </LikeProvider>
    )
}

export default FavoritesPage