import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Brewery } from "~/types";

interface LikeProviderProps {
    children: ReactNode;
}

export const LikeContext = createContext<Brewery[]>([]);

/**
 * Creates a LikeProvider component that provides a context for the likeBreweries state.
 *
 * @param {LikeProviderProps} children - The children components
 * @return {ReactNode} The LikeProvider component
 */
export const LikeProvider = ({ children }: LikeProviderProps) => {
    const [likeBreweries, setLikeBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
        const getLikeBreweries = async () => {
            const keys = await AsyncStorage.getAllKeys();
            if (keys !== null) { // Verificar si 'keys' no es null
                const items = await AsyncStorage.multiGet(keys);
                const breweries: Brewery[] = items.map(item => JSON.parse(item[1]!));
                setLikeBreweries(breweries);
            }
        };

        getLikeBreweries();
    }, []);

    return (
        <LikeContext.Provider value={likeBreweries}>
            {children}
        </LikeContext.Provider>
    );
};
