import { useState } from "react"
import { View } from "tamagui"
import { SearchInput } from "../input/SearchInput"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { Brewery } from "~/types"
import { BreweriesList } from "../list/BreweriesList"


export const SearchBrewery = () => {

    const [inputValue, setinputValue] = useState('');
    const [breweriesData, setBreweriesData] = useState<Brewery[]>([]);

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setinputValue(e.nativeEvent.text)
    }

    return (
        <View>
            <SearchInput
                handleChangeInput={handleChange}
                inputValue={inputValue}
            />
            <BreweriesList
                breweries={breweriesData}
            />
        </View>
    )
}
