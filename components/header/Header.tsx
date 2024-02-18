import { useRouter } from "expo-router"
import { ChevronLeft } from "lucide-react-native"
import { Button, ButtonText, View } from "tamagui"

export const Header = () => {

    const router = useRouter()

    const handlePress = () => router.back();

    return (
        <View
            w={'100%'}
            h={50}
            justifyContent="center"
            backgroundColor={'#f3f4f6'}
        >
            <ChevronLeft
                color={'#000'}
                size={30}
                style={{ marginLeft: 10 }}
                onPress={handlePress}
            />
        </View>
    )
}
