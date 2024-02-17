import { Heart, HeartOff } from "lucide-react-native"
import { useLike } from "~/hooks/useLike";
import { ButtonCard } from "~/tamagui.config";
import { PreviusBrewery } from "~/types";

export const LikeButton = ({
    name,
    state,
    country,
    city,
    id,
}: PreviusBrewery) => {

    const { addItem, removeItemById, storedValue } = useLike(id, {
        name,
        state,
        country,
        city,
        id,
    });

    const handleLike = async () => {
        if (storedValue) {
            await removeItemById();
        }
        else {
            await addItem();
        }
    }

    return (
        <ButtonCard onTouchEnd={handleLike}>
            {
                storedValue
                    ?
                    <HeartOff color="red" />
                    :
                    <Heart color="red" />
            }
        </ButtonCard>
    )
}
