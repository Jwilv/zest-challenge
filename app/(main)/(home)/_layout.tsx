import { Slot } from 'expo-router';
import { Header } from '~/components/header';
import { BreweriesProvider } from '~/providers/BreweriesProvider';

export default function Layout() {

    return (
        <BreweriesProvider>
            <Slot />
        </BreweriesProvider>
    );
}
