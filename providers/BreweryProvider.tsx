import { SplashScreen, useLocalSearchParams } from "expo-router";
import { ReactNode, createContext, useEffect, useState } from "react";
import breweriesApi from "~/services/breweries";
import { Brewery } from "~/types";

interface BreweryProviderProps {
    children: ReactNode;
}

export const BreweryContext = createContext<Brewery | undefined>({} as Brewery);

/**
 * BreweryProvider component that fetches brewery data and provides it to its children.
 *
 * @param {BreweryProviderProps} children - The children components to be wrapped by BreweryProvider.
 * @return {JSX.Element} The BreweryProvider component with brewery data provided to its children.
 */
export const BreweryProvider = ({ children }: BreweryProviderProps) => {

    const { id } = useLocalSearchParams();

    const [brewery, setBrewery] = useState<Brewery | undefined>();

    useEffect(() => {
        const getData = async () => {
            const data = await breweriesApi.get(`/${id}`)
                .then((res) => res.data)
                .catch((err) => console.log(err))
            setBrewery(data);
        }

        getData();
    }, []);

    useEffect(() => {
        if (!brewery) {
            SplashScreen.hideAsync();
        }
    }, [brewery]);

    return (
        <BreweryContext.Provider value={brewery}>
            {children}
        </BreweryContext.Provider>
    );
};
