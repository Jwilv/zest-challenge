import { Heart } from 'lucide-react-native';
import { Card, SizableText, Paragraph, XStack, CardFooter, Button, YStack } from 'tamagui';
import { Brewery, PreviusBrewery } from '~/types'
import { LikeButton } from '../button/LikeButton';


export const CardBrewery = ({ name, state, country, city, id }: PreviusBrewery) => {
    return (
        <Card width={350} height={60} margin={8}>
            <Card.Header
                marginLeft={7}
                marginTop={7}
                padding={0}
            >
                <SizableText>{name}</SizableText>
                <Paragraph theme="alt2">{country} : {state}, {city}</Paragraph>
            </Card.Header>
            <LikeButton name={name} state={state} country={country} city={city} id={id} />
        </Card>
    )
}
