import { StyleProp, ViewStyle } from "react-native"
import { H2, View } from "tamagui"


export const ErrorSearch = ({ style }: { style?: StyleProp<ViewStyle> }) => {
    return (
            <H2 color={'#f42e16'}>No results found...</H2>
    )
}
