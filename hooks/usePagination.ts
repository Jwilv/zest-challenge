import { useEffect, useState } from "react"
import { Breweries } from "~/types"


export const usePagination = () => {
    const [breweries, setBreweries] = useState<Breweries>([]);

    const [pages, setPages] = useState([1, 2, 3, 4, 5]);

    const [currentPage, setCurrentPage] = useState(1);

    const [pageUpdate, setPageUpdate] = useState(2);

    const [breweriesPage, setBreweriesPage] = useState<Breweries>([]);

    const changePage = (addAndSubstract: number) => {
        if ((currentPage + addAndSubstract) >= 1) {
            setCurrentPage(currentPage + addAndSubstract);
        }
        if (pages[0] + addAndSubstract >= 1) {
            setPages(pages.map((page) => page + addAndSubstract));
        }
    }

    const selectPage = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fechtUpdate = async () => {
            if (currentPage % 5 === 0) {
                const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?page=${pageUpdate}&per_page=88`);
                const data: Breweries = await response.json();
                setBreweries([...breweries, ...data]);
                setPageUpdate(pageUpdate + 1);
            }
        }

        fechtUpdate();

    }, [currentPage])

    //update data page
    useEffect(() => {
        setBreweriesPage(breweries.slice(currentPage * 8, (currentPage + 1) * 8));
    }, [currentPage, breweries])

    //initial load data from api
    useEffect(() => {
        const fecthData = async () => {
            const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=88');
            const data: Breweries = await response.json();
            setBreweries(data)
        }

        fecthData()
    }, [])

    return {
        changePage,
        currentPage,
        breweriesPage,
        pages,
        selectPage,
    }
}
