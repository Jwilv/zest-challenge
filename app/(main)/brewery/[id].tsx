import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { View, Text } from 'tamagui';

const BreweryByIdPage = () => {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: `Brewery ${id}` }} />
            <Text>BreweryByIdPage</Text>
        </View>
    )
}

export default BreweryByIdPage