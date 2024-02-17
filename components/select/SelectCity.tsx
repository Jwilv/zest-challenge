import { Picker } from '@react-native-picker/picker';
import { Check } from 'lucide-react-native';
import { useState } from 'react'
import { View } from 'tamagui';



interface Props {
    citys: string[]
}

export const SelectCity = ({ citys }: Props) => {

    const [selectValue, setSelectValue] = useState('all')

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
