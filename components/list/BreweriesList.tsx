
import { CardBrewery } from '../card'
import { FlatList, StyleProp, ViewStyle } from 'react-native'
import { Brewery, PreviusBrewery } from '../../types';

interface Props {
    style?: StyleProp<ViewStyle>
    breweries: PreviusBrewery[]
}

export const BreweriesList = ({ style, breweries }: Props) => {

    return (
        <FlatList
            data={breweries}
            renderItem={({ item }) => <CardBrewery {...item} />}
            keyExtractor={item => item.id}
            style={style}
        />
    )
}
