import { Heart, HeartOff } from "lucide-react-native"
import { useLike } from "~/hooks/useLike";
import { ButtonCard } from "~/tamagui.config";
import { PreviusBrewery } from "~/types";
import { useContext } from 'react';
import { LikeContext } from "~/providers/LikeProvider";

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

    const { addLikeBreweries, deleteLikeBreweries } = useContext(LikeContext);

    const handleLike = async () => {
        if (storedValue) {
            await removeItemById();
            deleteLikeBreweries(id);
        }
        else {
            await addItem();
            addLikeBreweries({ name, state, country, city, id });
        }
    }

    return (
        <ButtonCard onTouchEnd={handleLike}>
            {
                storedValue
                    ?
                    <HeartOff color="#007AFF" />
                    :
                    <Heart color="#007AFF" />
            }
        </ButtonCard>
    )
}
