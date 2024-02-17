import { useEffect, useState } from "react"
import { View } from "tamagui"
import { SearchInput } from "../input/SearchInput"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { Brewery } from "~/types"
import { BreweriesList } from "../list/BreweriesList"
import { useDebonce } from "~/hooks/useDebounce"
import breweriesApi from "~/services/breweries"
import { ErrorSearch } from "../errors/ErrorSearch"


export const SearchBrewery = () => {

    const [inputValue, setinputValue] = useState('');
    const [breweriesData, setBreweriesData] = useState<Brewery[]>([]);
    const debouncedValue = useDebonce(inputValue, 500);

    useEffect(() => {

        const getBereweriesByName = async () => {
            const { data } = await breweriesApi.get(`?by_name=${debouncedValue}&per_page=8`);
            setBreweriesData(data)
        }

        inputValue ? getBereweriesByName() : setBreweriesData([])

    }, [debouncedValue])

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setinputValue(e.nativeEvent.text)
    }

    return (
        <View>
            <SearchInput
                handleChangeInput={handleChange}
                inputValue={inputValue}
            />
            {
                debouncedValue !== '' && breweriesData.length === 0 && <ErrorSearch />
            }
            <BreweriesList
                breweries={breweriesData}
            />
        </View>
    )
}
