
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { ListPages } from './components';
import { useContext, useEffect, useState } from 'react';
import { SelectCity } from '../select/SelectCity';
import { View } from 'tamagui';
import { BreweriesList } from '../list/BreweriesList';
import { SearchInput } from '../input/SearchInput';
import { useDebonce, usePagination } from '~/hooks';
import { BreweriesContext } from '~/providers/BreweriesProvider';
import { ErrorSearch } from '../errors/ErrorSearch';

/**
 * Component for handling pagination and filtering of breweries.
 */
export const BreweriesPagination = () => {

    const [filterValues, setFilterValues] = useState({ name: '', city: '' });

    const debouncedValue = useDebonce(filterValues.name, 500);

    const { pages, currentPage } = useContext(BreweriesContext);

    const {
        breweriesPage,
        changePage,
        selectPage,
        handleFilter,
        cityOptions,
    } = usePagination();

    useEffect(() => {
        handleFilter(filterValues);
    }, [debouncedValue])


    const handleChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {

        setFilterValues({
            ...filterValues,
            name: e.nativeEvent.text,
        });

        selectPage(1)
    }

    const handleFilterCity = (city: string) => {

        if (city === 'all') {
            handleFilter({ ...filterValues, city: '' });
            setFilterValues({ ...filterValues, city: '' });
        } else {
            handleFilter({ ...filterValues, city });
            setFilterValues({ ...filterValues, city });
        }

        selectPage(1)
    }


    return (
        <View
            justifyContent='center'
            alignItems='center'
        >
            <SearchInput
                handleChangeInput={handleChangeInput}
                inputValue={filterValues.name}
            />

            <SelectCity
                citys={cityOptions}
                onValueChange={handleFilterCity}
            />

            {breweriesPage.length === 0 && debouncedValue !== '' &&
                <View
                    position="absolute"
                    justifyContent='center'
                    alignItems='center'
                >
                    <ErrorSearch />
                </View>
            }

            <BreweriesList
                breweries={breweriesPage}
                style={{ height: 590 }}
            />

            <ListPages
                changePage={changePage}
                currentPage={currentPage}
                pages={pages}
                selectPage={selectPage}
            />

        </View >
    )
}
