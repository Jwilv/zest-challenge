import React, { useEffect, useState } from 'react'
import { Breweries } from '~/types';

interface Filter {
    name: string,
    city: string,
}

export const useFilter = () => {

    const [filter, setFilter] = useState<Filter>({
        name: '',
        city: '',
    })

    const [allItems, setAllItems] = useState<Breweries>([]);
    const [filteredItems, setFilteredItems] = useState<Breweries>([]);

    const handleFilter = (filter: Filter) => setFilter(filter);

    useEffect(() => {
        const filtered = allItems.filter(item =>
            (filter.name === '' || item.name.toLowerCase().includes(filter.name.toLowerCase())) &&
            (filter.city === '' || item.city.toLowerCase().includes(filter.city.toLowerCase()))
        );

        setFilteredItems(filtered);
    }, [filter, allItems]);


    return {
        handleFilter,
        filteredItems,
    }
}
