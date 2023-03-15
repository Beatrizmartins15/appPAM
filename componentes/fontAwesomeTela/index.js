import react from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function AwesomeTela(){
    return(
        <View>
            <View>
            <FontAwesome name="signal" size={24} color="black" />
            <Text>Signal</Text>
            </View>
        </View>

    );
}