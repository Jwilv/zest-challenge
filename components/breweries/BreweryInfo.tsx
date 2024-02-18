import { H1, H2, Paragraph, Text } from 'tamagui';
import { TextBrewery } from '~/components/text/TextBrewery';
import { View } from 'tamagui';
import { Beer, Mailbox, MapPinned, PanelsTopLeft, Phone } from 'lucide-react-native';
import { Brewery } from '~/types';

interface Props {
    brewery: Brewery | undefined
}

export const BreweryInfo = ({ brewery }: Props) => {
    return (
        <View>
            <H2 color={'#000'}>{brewery?.name}</H2>
            <Paragraph
                color={'#000'}
                size='$6'
                marginTop={20}
                marginBottom={5}
            >{brewery?.city}, {brewery?.state}, {brewery?.country}</Paragraph>
            <View
                backgroundColor={'#f3f4f6'}
                padding={10}
                borderRadius={10}
            >
                <TextBrewery icon={Beer}>
                    Type : {brewery?.brewery_type}
                </TextBrewery>
                <TextBrewery icon={Phone}>
                    Phone : {brewery?.phone}
                </TextBrewery>
                <TextBrewery icon={PanelsTopLeft}>
                    Website: {brewery?.website_url}
                </TextBrewery>
                <TextBrewery icon={Mailbox}>
                    Postal code: {brewery?.postal_code}
                </TextBrewery>
                <TextBrewery icon={MapPinned}>
                    Address: {brewery?.address_1}
                </TextBrewery>
            </View>
        </View>
    )
}
