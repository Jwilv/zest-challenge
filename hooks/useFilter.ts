import React, { useEffect, useState } from 'react'
import { Breweries } from '~/types';

interface Filter {
    name: string,
    city: string,
}

/**
 * Custom hook for filtering items based on name and city.
 *
 * @param {Filter} filter - the filter object containing name and city properties
 * @return {object} an object containing functions and state variables for handling the filter
 */
export const useFilter = () => {

    const [filter, setFilter] = useState<Filter>({
        name: '',
        city: '',
    })

    const [allItems, setAllItems] = useState<Breweries>([]);
    const [filteredItems, setFilteredItems] = useState<Breweries>([]);
    const [cityOptions, setCityOptions] = useState<string[]>([])

    const handleFilter = (filter: Filter) => setFilter(filter);

    useEffect(() => {
        const allCities = filteredItems.map(brewery => brewery.city);
        setCityOptions(allCities);
    }, [filteredItems])


    useEffect(() => {
        const filtered = allItems.filter(item =>
            (filter.name === '' || new RegExp(filter.name.toLowerCase()).test(item.name.toLowerCase())) &&
            (filter.city === '' || item.city.toLowerCase().includes(filter.city.toLowerCase()))
        );

        setFilteredItems(filtered);
    }, [filter, allItems]);


    return {
        handleFilter,
        filteredItems,
        setAllItems,
        filter,
        cityOptions,
    }
}
