import { Href, Link, usePathname } from 'expo-router';
import { LucideIcon } from 'lucide-react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BarItem } from '~/tamagui.config'

interface Props {
    href: Href<string>;
    icon: LucideIcon;
}

export const TabItem = ({
    href,
    icon: Icon,
}: Props) => {

    const pathname = usePathname();

    return (
        <Link href={{ pathname: href }} asChild>
            <TouchableOpacity>
                <BarItem backgroundColor={pathname === href ? '#007AFF' : '$colorTransparent'}>
                    <Icon size={27} color={pathname === href ? '#fff' : '#007AFF'} />
                </BarItem>
            </TouchableOpacity>
        </Link>
    )
}
