import { Pressable, Text } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";


const Button = ({ title = "Click", onPress = () => {} }: { title?: string; onPress?: () => void }) => {

    const { theme } = useTheme();

    return (
        <Pressable
            onPress={onPress}
            style={{ backgroundColor: theme.accent }}
            className="w-full p-5 bg-primary rounded-full">
            <Text 
            style={{ color: theme.textPrimary }}
            className="w-full text-center text-2xl font-bold">
                {title}
            </Text>
        </Pressable>
    )
}

export default Button;