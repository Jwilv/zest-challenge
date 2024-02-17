
import { XStack, YStack, View, Button, ButtonText } from 'tamagui';

import { FlatList, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData } from 'react-native';
import { usePagination } from '~/hooks/usePagination';
import { ButtonPagination } from './components';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { useState } from 'react';
import { CardBrewery } from '../card';

export const BreweriesPagination = () => {

    const [inputValue, setInputValue] = useState('');

    const {
        breweriesPage,
        pages,
        currentPage,
        changePage,
        selectPage,
        handleFilter,
        filteredItems
    } = usePagination();

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(e.nativeEvent.text);
        if (e.nativeEvent.text === '') {
            handleFilter({ name: '', city: '' })
        }
        handleFilter({ name: e.nativeEvent.text, city: '' })
        selectPage(1)
    }


    return (
        <>
            <TextInput
                placeholder='Search...'
                value={inputValue}
                onChange={handleChange}
            />
            <FlatList
                data={breweriesPage}
                renderItem={({ item }) => <CardBrewery {...item} />}
                keyExtractor={item => item.id}
            />
            <View
                display='flex'
                flexDirection='row'
                justifyContent='space-around'
            >
                <ButtonPagination
                    icon={ArrowLeft}
                    onTouchEnd={changePage}
                    page={-1}
                    backgroundColor='#007AFF'
                />
                {
                    pages.map((page) => (
                        <ButtonPagination
                            key={page}
                            label={page}
                            onTouchEnd={selectPage}
                            page={page}
                            backgroundColor={currentPage === page ? '#007AFF' : '#fff'}
                        />
                    ))
                }
                <ButtonPagination
                    icon={ArrowRight}
                    onTouchEnd={changePage}
                    page={1}
                    backgroundColor='#007AFF'
                />
            </View>
        </>
    )
}
