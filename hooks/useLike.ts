import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Brewery, PreviusBrewery } from '~/types';

export const useLike = (id: string, brewery: PreviusBrewery) => {
    const [storedValue, setStoredValue] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const jsonValue = await AsyncStorage.getItem(id);
            if (jsonValue != null) setStoredValue(true);
            else setStoredValue(false);
        };

        if (!storedValue) {
            fetchData();
        }
    }, [id, storedValue]);

    const addItem = async () => {
        await AsyncStorage.setItem(id, JSON.stringify(brewery))
            .then(() => setStoredValue(true))
            .catch(err => console.log(err))
    };

    const removeItemById = async () => {
        await AsyncStorage.removeItem(id)
            .then(() => setStoredValue(false))
            .catch(err => console.log(err));
    };

    return { addItem, removeItemById, storedValue };
};
