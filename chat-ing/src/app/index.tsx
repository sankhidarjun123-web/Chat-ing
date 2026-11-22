import { View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { chatHome } from '@/data/images';
import Button from '@/components/commons/Button';
import { useTheme } from '@/theme/ThemeProvider';

export default function HomeScreen() {

  const { theme } = useTheme();
  return (
    <SafeAreaView edges={['bottom']} className="flex-1">
    <View className="flex-1 w-full h-screen">
      <View className="w-full flex-1">
        <Image source={chatHome} className="w-full h-full" />
      </View>

      <View style={{ backgroundColor: theme.background }} className="w-full p-5 flex flex-col items-center gap-5">
        <Button title="Get Started" />
      </View>
    </View>
  </SafeAreaView>);
}