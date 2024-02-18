import { LucideIcon } from "lucide-react-native"
import { Paragraph } from "tamagui"

interface Props {
    children: React.ReactNode
    icon?: LucideIcon,
}

export const TextBrewery = ({ children, icon: Icon }: Props) => {
    return (
        <Paragraph
            color={'#000'}
            size='$5'
            margin={5}
        >
            {Icon && <Icon size={20} color={'#000'} />}
            &nbsp;{children}
        </Paragraph>
    )
}
