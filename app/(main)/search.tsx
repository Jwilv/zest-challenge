import { useEffect, useState } from "react";
import { SearchBrewery } from "~/components/breweries/SearchBrewery"
import { useDebonce } from "~/hooks";
import breweriesApi from "~/services/breweries";
import { Container, Main } from "~/tamagui.config"
import { Brewery } from "~/types";

/**
 * This function represents the SearchPage component, which handles the search functionality for breweries.
 *
 * @return {JSX.Element} The JSX element representing the SearchPage component.
 */
const SearchPage = () => {

    const [inputValue, setinputValue] = useState('');
    const debouncedValue = useDebonce(inputValue, 500);
    const [breweriesData, setBreweriesData] = useState<Brewery[]>([]);

    useEffect(() => {

        const getBereweriesByName = async () => {
            try {
                const { data } = await breweriesApi.get(`?by_name=${debouncedValue}&per_page=8`);
                setBreweriesData(data)
            } catch (error) {
                console.log(error)
            }
        }

        inputValue ? getBereweriesByName() : setBreweriesData([])

    }, [debouncedValue])

    return (
        <Container>
            <Main alignItems='center'>
                <SearchBrewery
                    inputValue={inputValue}
                    handleChangeValue={setinputValue}
                    breweries={breweriesData}
                    debouncedValue={debouncedValue}
                />
            </Main>
        </Container>
    )
}

export default SearchPage