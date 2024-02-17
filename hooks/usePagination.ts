import { useEffect, useState } from "react"
import { Breweries } from "~/types"
import { useFilter } from "./useFilter";


export const usePagination = () => {
    const [breweries, setBreweries] = useState<Breweries>([]);

    const [pages, setPages] = useState([...Array(5)].map((_value, index) => (index + 1)));

    const [currentPage, setCurrentPage] = useState(1);

    const [pageUpdate, setPageUpdate] = useState(2);

    const [breweriesPage, setBreweriesPage] = useState<Breweries>([]);

    const { handleFilter, filteredItems, setAllItems, filter, cityOptions } = useFilter();


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

    useEffect(() => {
        const fechtUpdate = async () => {
            if (currentPage % 5 === 0) {
                const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?page=${pageUpdate}&per_page=88`);
                const data: Breweries = await response.json();
                setBreweries([...new Set([...breweries, ...data])]);
                setPageUpdate(pageUpdate + 1);
            }
        }

        fechtUpdate();

    }, [currentPage])

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

    //initial load data from api
    useEffect(() => {
        const fecthData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?page=${pageUpdate}&per_page=88`);
            const data: Breweries = await response.json();
            setBreweries([...new Set(data)]);
            setPageUpdate(pageUpdate + 1);
        }

        fecthData()
    }, [])

    return {
        changePage,
        currentPage,
        breweriesPage,
        pages,
        selectPage,
        handleFilter,
        filteredItems,
        cityOptions,
    }
}
