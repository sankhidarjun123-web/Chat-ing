import { Platform, View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { chatHome } from '@/data/images';
import Button from '@/components/commons/Button';
import { useTheme } from '@/theme/ThemeProvider';
import { router } from 'expo-router';


export default function HomeScreen() {

  const { theme } = useTheme();

  return (
    <SafeAreaView edges={['bottom']} className="flex-1">

      {/*Main component*/}
      <View className={`flex-1 w-full relative  ${Platform.OS === "web" ? "grid md:grid-cols-2" : "flex-col flex"}`}>

        {/*Heading Mobile*/}
        <View
          style={{
            backgroundColor: theme.background
          }}
          className={`z-50 absolute top-0 w-full p-12 pt-16 flex items-center ${Platform.OS === "web" && "hidden"} gap-2 rounded-b-full`}
        >
          <Text
            style={{ color: theme.textPrimary }}
            className="text-4xl font-bold"
          >
            Welcome to <Text style={{ color: theme.accent }} className="text-4xl font-bold" >Chat-ing</Text>
          </Text>

          <Text
            style={{ color: theme.textSecondary }}
            className="text-lg text-center"
          >
            Words speak louder than people, and says more.
          </Text>
        </View>


        {/*App Image*/}
        <View className="w-full flex-1 rounded-b-2xl">
          <Image source={chatHome} className={`w-full h-full ${Platform.OS === "android" && "rounded-b-2xl"}`}
            resizeMode="cover"
          />
        </View>

        {/*Get Started Component*/}
        <View style={{ backgroundColor: theme.background }} className={`${Platform.OS === "web" ? "w-full h-full justify-center" : "w-full"} p-5 flex flex-col items-center gap-5`}>

          {/*Heading Web*/}
          <View
            style={{
              backgroundColor: theme.background
            }}
            className={`w-full flex items-center ${Platform.OS === "android" && "hidden"} gap-2 rounded-b-full`}
          >
            <Text
              style={{ color: theme.textPrimary }}
              className="text-4xl font-bold"
            >
              Welcome to <Text style={{ color: theme.accent }} className="text-4xl font-bold" >Chat-ing</Text>
            </Text>

            <Text
              style={{ color: theme.textSecondary }}
              className="text-lg text-center"
            >
              Words speak louder than people, and says more.
            </Text>
          </View>

          {/*Get Started*/}
          <Button
            title="Get Started"
            onPress={ () => router.replace("/authenticate") }
          />
        </View>
      </View>
    </SafeAreaView>);
}