import { Picker } from '@react-native-picker/picker';
import { Check } from 'lucide-react-native';
import { useState } from 'react'



interface Props {
    citys: string[]
}

export const SelectCity = ({ citys }: Props) => {

    const [selectValue, setSelectValue] = useState('all')

    return (
        <Picker
            selectedValue={selectValue}
            onValueChange={(value) => setSelectValue(value)}
            style={{ width: 350, margin: 10 }}
        >
            <Picker.Item label="All" value="all" style={{ backgroundColor: selectValue === 'all' ? '#007AFF' : '#fff' }} />
            {
                citys.map((city) => (
                    <Picker.Item key={city} label={city} value={city} />
                ))
            }

        </Picker>
    )
}
