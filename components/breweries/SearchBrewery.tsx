import { View } from "tamagui"
import { SearchInput } from "../input/SearchInput"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { Brewery } from "~/types"
import { BreweriesList } from "../list/BreweriesList"
import { ErrorSearch } from "../errors/ErrorSearch"

interface SearchBreweryProps {
    breweries: Brewery[]
    handleChangeValue: React.Dispatch<React.SetStateAction<string>>
    inputValue: string
    debouncedValue: string
}

/**
 * SearchBrewery component that renders a search input and a list of breweries.
 *
 * @param {SearchBreweryProps} breweries - List of breweries to display
 * @param {function} handleChangeValue - Function to handle input value change
 * @param {string} inputValue - Current value of the input
 * @param {string} debouncedValue - Debounced value of the input
 * @return {JSX.Element} The rendered component
 */
export const SearchBrewery = ({
    breweries,
    handleChangeValue,
    inputValue,
    debouncedValue
}: SearchBreweryProps) => {

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        handleChangeValue(e.nativeEvent.text)
    }

    return (
        <View>
            <SearchInput
                handleChangeInput={handleChange}
                inputValue={inputValue}
            />
            {
                debouncedValue !== '' && breweries.length === 0
                &&
                <View
                    flex={1}
                    justifyContent='center'
                    alignItems='center'
                >
                    <ErrorSearch />
                </View>
            }
            <BreweriesList
                breweries={breweries}
            />
        </View>
    )
}
