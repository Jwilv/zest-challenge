
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { usePagination } from '~/hooks/usePagination';
import { ListPages } from './components';
import { useState } from 'react';
import { SelectCity } from '../select/SelectCity';
import { View } from 'tamagui';
import { BreweriesList } from '../list/BreweriesList';
import { SearchInput } from '../input/SearchInput';

export const BreweriesPagination = () => {

    const [inputValue, setInputValue] = useState('');

    const {
        breweriesPage,
        pages,
        currentPage,
        changePage,
        selectPage,
        handleFilter,
        cityOptions,
    } = usePagination();

    const handleChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(e.nativeEvent.text);
        if (e.nativeEvent.text === '') {
            handleFilter({ name: '', city: '' })
        }
        handleFilter({ name: e.nativeEvent.text, city: '' })
        selectPage(1)
    }

    const handleFilterCity = (city: string) => {
        city === 'all'
            ? handleFilter({ name: inputValue, city: '' })
            : handleFilter({ name: inputValue, city })

        selectPage(1)
    }


    return (
        <View
            justifyContent='center'
            alignItems='center'
        >
            <SearchInput
                handleChangeInput={handleChangeInput}
                inputValue={inputValue}
            />

            <SelectCity
                citys={cityOptions}
                onValueChange={handleFilterCity}
            />

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
        </View>
    )
}
