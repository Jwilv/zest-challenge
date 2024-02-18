import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { Input } from "~/tamagui.config"

interface Props {
    inputValue: string
    handleChangeInput: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export const SearchInput = ({ inputValue, handleChangeInput }: Props) => {
    return (
        <Input
            placeholder='Search...'
            value={inputValue}
            onChange={handleChangeInput}
            style={{ height: 50, width: 350,}}
        />
    )
}
