
import { XStack, YStack, View, Button, ButtonText } from 'tamagui';

import { Text, TextInput } from 'react-native';
import { usePagination } from '~/hooks/usePagination';
import { ButtonPagination } from './components';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { useState } from 'react';

export const BreweriesPagination = () => {

    const [inputValue, setInputValue] = useState('');

    const {
        breweriesPage,
        pages,
        currentPage,
        changePage,
        selectPage
    } = usePagination();


    return (
        <>
            <TextInput
                placeholder='Search...'
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            {
                breweriesPage.map((brewery: any) => {
                    return (
                        <YStack key={brewery.id}>
                            <Text>{brewery.name}</Text>
                        </YStack>
                    )
                })
            }
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
