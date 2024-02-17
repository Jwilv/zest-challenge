import { Picker } from '@react-native-picker/picker';
import { Check } from 'lucide-react-native';
import { useEffect, useState } from 'react'
import { View } from 'tamagui';



interface Props {
    citys: string[]
    onValueChange: (city: string) => void
}

export const SelectCity = ({ citys, onValueChange }: Props) => {

    const [selectValue, setSelectValue] = useState('all')

    useEffect(() => {
        onValueChange(selectValue);
    }, [selectValue])


    return (
        <View borderRadius={10}>
            <Picker
                selectedValue={selectValue}
                onValueChange={(value) => setSelectValue(value)}
                style={{ width: 350 }}
            >
                <Picker.Item label="All" value="all" color={selectValue === 'all' ? '#007AFF' : '#000'} />
                {
                    citys.map((city) => (
                        <Picker.Item key={city} label={city} value={city} color={selectValue === city ? '#007AFF' : '#000'} />
                    ))
                }

            </Picker>
        </View>
    )
}
