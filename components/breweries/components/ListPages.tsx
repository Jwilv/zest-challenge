import { View } from "tamagui"
import { ButtonPagination } from "./ButtonPagination"
import { ArrowLeft, ArrowRight } from "lucide-react-native"

interface Props {
    pages: number[],
    currentPage: number,
    selectPage: (page: number) => void,
    changePage: (page: number) => void,
}

export const ListPages = ({
    pages,
    currentPage,
    selectPage,
    changePage
}: Props) => {
    return (
        <View
            display='flex'
            flexDirection='row'
            justifyContent='space-around'
            width={350}
            marginTop={5}
        >
            <ButtonPagination
                icon={ArrowLeft}
                onTouchEnd={changePage}
                page={-1}
                backgroundColor='#007AFF'
            />
            {
                pages.map((page) => (
                    <ButtonPagination
                        key={page}
                        label={page}
                        onTouchEnd={selectPage}
                        page={page}
                        backgroundColor={currentPage === page ? '#007AFF' : '#fff'}
                    />
                ))
            }
            <ButtonPagination
                icon={ArrowRight}
                onTouchEnd={changePage}
                page={1}
                backgroundColor='#007AFF'
            />
        </View>
    )
}
