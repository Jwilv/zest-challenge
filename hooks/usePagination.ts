import { useContext, useEffect, useState } from "react"
import { Breweries } from "~/types"
import { useFilter } from "./useFilter";
import { BreweriesContext } from "~/providers/BreweriesProvider";

/**
 * Returns an object with functions and data for pagination and filtering breweries.
 *
 * @return {object} Object with functions and data for pagination and filtering breweries
 */
export const usePagination = () => {

    const [breweriesPage, setBreweriesPage] = useState<Breweries>([]);

    const { handleFilter, filteredItems, setAllItems, filter, cityOptions } = useFilter();

    const { breweries, pages, setPages, currentPage, setCurrentPage } = useContext(BreweriesContext);

    useEffect(() => {
        setAllItems(breweries);
    }, [breweries])


    useEffect(() => {
        if (filter.name === '' && filter.city === '') {
            currentPage === 1 && setPages([...Array(5)].map((_value, index) => (index + 1)))
        } else {
            const pagesDivision = Math.ceil(filteredItems.length / 8);
            pagesDivision < 5 && setPages([...Array(pagesDivision)].map((_value, index) => (index + 1)))
        }
    }, [filteredItems])


    const changePage = (addAndSubstract: number) => {
        if ((currentPage + addAndSubstract > 0 && Math.ceil(filteredItems.length / 8) !== currentPage)) setCurrentPage(currentPage + addAndSubstract);
        if (pages[0] + addAndSubstract > 0 && pages.length >= 5) setPages(pages.map((page) => page + addAndSubstract));
    }

    const selectPage = (page: number) => setCurrentPage(page);



    //update data page
    useEffect(() => {
        if (filteredItems.length <= 8) {
            setBreweriesPage(filteredItems.slice(0, 8))
            setCurrentPage(1)
        }
        else {
            setBreweriesPage(filteredItems.slice((currentPage - 1) * 8, currentPage * 8))
        }

    }, [currentPage, filteredItems])


    return {
        changePage,
        breweriesPage,
        selectPage,
        handleFilter,
        filteredItems,
        cityOptions,
    }
}
