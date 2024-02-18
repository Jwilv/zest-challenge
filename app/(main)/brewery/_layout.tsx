import { Slot } from 'expo-router';
import { Header } from '~/components/header';
import { BreweryProvider } from '~/providers/BreweryProvider';

export default function Layout() {

    return (
        <BreweryProvider>
            <Header />
            <Slot />
        </BreweryProvider>
    );
}
