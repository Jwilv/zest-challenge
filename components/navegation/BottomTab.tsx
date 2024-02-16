import { Heart, Home, Search } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Bar, BarItem } from '~/tamagui.config'
import { TabItem } from './components/TabItem'
import { NavegationTabItems } from '~/contants/navegation'

export const BottomTab = () => {
    return (
        <Bar>
            {
                NavegationTabItems.map((tabItem) => (
                    <TabItem
                        {...tabItem}
                        key={tabItem.href}
                        isActive={false}
                    />
                ))
            }
        </Bar>
    )
}