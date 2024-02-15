import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Main } from 'tamagui'

const FavoritesPage = () => {
    return (
        <Main>
            <Stack.Screen options={{ title: 'Favorites' }} />
            <View>
                <Text>Favorites text</Text>
            </View>
        </Main>
    )
}

export default FavoritesPage