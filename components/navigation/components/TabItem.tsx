import { Href, Link, LinkProps } from 'expo-router';
import { LucideIcon } from 'lucide-react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BarItem } from '~/tamagui.config'

interface Props {
    isActive: boolean;
    href: Href<string>;
    icon: LucideIcon;
}

export const TabItem = ({
    isActive,
    href,
    icon: Icon,
}: Props) => {
    return (
        <Link href={{ pathname: href }} asChild>
            <TouchableOpacity>
                <BarItem backgroundColor={isActive ? '#007AFF' : '$colorTransparent'}>
                    <Icon size={27} color={isActive ? '#fff' : '#007AFF'} />
                </BarItem>
            </TouchableOpacity>
        </Link>
    )
}
