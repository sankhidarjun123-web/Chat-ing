import { View, Text, Image } from 'react-native';
import { chatHome } from '@/data/images';

export default function HomeScreen() {
  return (
    <View className="flex-1 w-full h-screen">
      <Image source={chatHome} className="w-full h-full"/>
    </View>
  );
}
