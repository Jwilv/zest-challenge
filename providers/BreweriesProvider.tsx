import { SplashScreen } from "expo-router";
import { ReactNode, createContext, useEffect, useState } from "react";
import breweriesApi from "~/services/breweries";
import { Breweries, Brewery } from "~/types";

interface BreweryProviderProps {
    children: ReactNode;
}

interface BreweriesContext {
    breweries: Breweries
    pages: number[]
    setPages: (pages: number[]) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

export const BreweriesContext = createContext<BreweriesContext>({} as BreweriesContext);

export const BreweriesProvider = ({ children }: BreweryProviderProps) => {

    const [breweries, setBreweries] = useState<Breweries>([]);

    const [pageUpdate, setPageUpdate] = useState(2);

    const [pages, setPages] = useState([...Array(5)].map((_value, index) => (index + 1)));

    const [currentPage, setCurrentPage] = useState(1);

    //initial load data from api
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await breweriesApi.get<Breweries>(`?page=${pageUpdate}&per_page=88`);
            setBreweries([...new Set(data)]);
            setPageUpdate(pageUpdate + 1);
        }

        fecthData()
    }, [])

    useEffect(() => {
        const fechtUpdate = async () => {
            if (currentPage % 5 === 0) {
                const { data } = await breweriesApi.get<Breweries>(`?page=${pageUpdate}&per_page=88`);
                setBreweries([...new Set([...breweries, ...data])]);
                setPageUpdate(pageUpdate + 1);
            }
        }

        fechtUpdate();

    }, [currentPage])

    useEffect(() => {
        if (!breweries) {
            SplashScreen.hideAsync();
        }
    }, [breweries]);

    return (
        <BreweriesContext.Provider value={{
            breweries,
            pages,
            setPages,
            currentPage,
            setCurrentPage,
        }}>
            {children}
        </BreweriesContext.Provider>
    );
};
