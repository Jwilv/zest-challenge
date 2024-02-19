import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Brewery, PreviusBrewery } from '~/types';
import { LikeContext } from '~/providers/LikeProvider';

/**
 * Custom hook to manage liking and unliking a brewery.
 *
 * @param {string} id - The unique identifier for the brewery
 * @param {PreviusBrewery} brewery - The brewery object to be stored
 * @return {Object} An object containing functions for adding and removing items, and the current stored value
 */
export const useLike = (id: string, brewery: PreviusBrewery) => {
    const [storedValue, setStoredValue] = useState<boolean>(false);

    const { setLikeBreweries } = useContext(LikeContext);

    useEffect(() => {

    }, [storedValue]);

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
            .then(() => {
                setStoredValue(true)
            })
            .catch(err => console.log(err))
    };

    const removeItemById = async () => {
        await AsyncStorage.removeItem(id)
            .then(() => setStoredValue(false))
            .catch(err => console.log(err));
    };

    return { addItem, removeItemById, storedValue };
};
