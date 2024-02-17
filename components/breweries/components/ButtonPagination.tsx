import { LucideIcon } from "lucide-react-native";
import { Text } from "tamagui";
import { Button } from "~/tamagui.config"

interface Props {
    onTouchEnd: (page: number) => void;
    icon?: LucideIcon;
    label?: string | number;
    page: number;
    backgroundColor: string
}

export const ButtonPagination = ({
    onTouchEnd,
    icon: Icon,
    page,
    label,
    backgroundColor
}: Props) => {
    return (
        <Button
            onTouchEnd={() => onTouchEnd(page)}
            backgroundColor={backgroundColor}
        >
            {
                Icon && <Icon size={28} color={'#fff'} />
            }
            {
                label && <Text color={backgroundColor === '#007AFF' ? '#fff' : '#007AFF'}>{label}</Text>
            }
        </Button>
    )
}
