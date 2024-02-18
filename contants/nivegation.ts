import { Href } from "expo-router";
import { Heart, Home, LucideIcon, Search } from "lucide-react-native";

interface TabItem {
    href: Href<string>;
    icon: LucideIcon;
}

export const nivegationTabItems: TabItem[] = [
    {
        href: '/',
        icon: Home,
    },
    {
        href: '/search',
        icon: Search,
    },
    {
        href: '/favorites',
        icon: Heart,
    }
]

