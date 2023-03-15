import react from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function EntypoTela(){
    return(
        <View >
            <View>
            <Entypo name="app-store" size={24} color="black" />
            <Text>
                App-Store
            </Text>
            </View>
        </View>

    );
}