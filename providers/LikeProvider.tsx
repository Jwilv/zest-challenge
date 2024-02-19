import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Brewery, PreviusBrewery } from "~/types";

interface LikeProviderProps {
    children: ReactNode;
}

interface LikeContextProps {
    likeBreweries: PreviusBrewery[];
    setLikeBreweries: (breweries: Brewery[]) => void;
    addLikeBreweries: (brewery: PreviusBrewery) => void;
    deleteLikeBreweries: (id: string) => void;
}

export const LikeContext = createContext<LikeContextProps>({} as LikeContextProps);

/**
 * Creates a LikeProvider component that provides a context for the likeBreweries state.
 *
 * @param {LikeProviderProps} children - The children components
 * @return {ReactNode} The LikeProvider component
 */
export const LikeProvider = ({ children }: LikeProviderProps) => {
    const [likeBreweries, setLikeBreweries] = useState<PreviusBrewery[]>([]);

    useEffect(() => {
        const getLikeBreweries = async () => {
            const keys = await AsyncStorage.getAllKeys();
            if (keys !== null) { // Verificar si 'keys' no es null
                const items = await AsyncStorage.multiGet(keys);
                const breweries: PreviusBrewery[] = items.map(item => JSON.parse(item[1]!));
                setLikeBreweries(breweries);
            }
        };

        getLikeBreweries();
    }, []);

    const addLikeBreweries = (brewery: PreviusBrewery) => {
        setLikeBreweries((breweries: PreviusBrewery[]) => [...breweries, brewery]);
    }

    const deleteLikeBreweries = (id: string) => {
        setLikeBreweries((breweries: PreviusBrewery[]) => breweries.filter((b: PreviusBrewery) => b.id !== id));
    }

    return (
        <LikeContext.Provider value={{
            likeBreweries,
            setLikeBreweries,
            addLikeBreweries,
            deleteLikeBreweries,
        }}>
            {children}
        </LikeContext.Provider>
    );
};
