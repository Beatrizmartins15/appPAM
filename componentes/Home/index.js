import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Home() {
    return (
      <View>
        <Entypo name="home" size={24} color="black" />
        <Text>Home</Text>
      </View>
    );
  }