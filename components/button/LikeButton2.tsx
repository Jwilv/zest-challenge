import { Heart, HeartOff } from "lucide-react-native"
import { useState } from "react";
import { ButtonCard } from "~/tamagui.config";
import { PreviusBrewery } from "~/types";

interface Props {
    onTouch?: () => void
    initValue: boolean
}

export const LikeButton2 = ({ onTouch, initValue }: Props) => {

    const [isLike, setLike] = useState<boolean>(initValue);
    const handleLike = () => {
        setLike(!isLike);
        onTouch && onTouch();
    }

    return (
        <ButtonCard onTouchEnd={handleLike}>
            {
                isLike
                    ?
                    <HeartOff color="#007AFF" testID="offlike" />
                    :
                    <Heart color="#007AFF" testID="like" />
            }
        </ButtonCard>
    )
}
