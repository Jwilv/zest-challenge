import { SplashScreen, useLocalSearchParams } from "expo-router";
import { ReactNode, createContext, useEffect, useState } from "react";
import breweriesApi from "~/services/breweries";
import { Brewery } from "~/types";

interface BreweryProviderProps {
    children: ReactNode;
}

export const BreweryContext = createContext<Brewery | undefined>({} as Brewery);

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
