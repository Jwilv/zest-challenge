import { Heart } from 'lucide-react-native';
import { Card, SizableText, Paragraph, YStack } from 'tamagui';
import { Brewery } from '~/types'


export const CardBrewery = ({ name, state, country, city }: Brewery) => {
    return (
        <Card width={350} height={60} margin={8}>
            <Card.Header
                marginLeft={7}
                marginTop={7}
                padding={0}
            >
                <SizableText>{name}</SizableText>
            </Card.Header>
            <Card.Footer padding={7}>
                <Paragraph theme="alt2">{country} : {state}, {city}</Paragraph>
            </Card.Footer>
            <YStack position='absolute' right={10} top={5}>
                <Heart color="red" />
            </YStack>
        </Card>
    )
}
