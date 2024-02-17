import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native"

interface Props {
    inputValue: string
    handleChangeInput: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export const SearchInput = ({ inputValue, handleChangeInput }: Props) => {
    return (
        <TextInput
            placeholder='Search...'
            value={inputValue}
            onChange={handleChangeInput}
            style={{ height: 50, width: 350 }}
        />
    )
}
