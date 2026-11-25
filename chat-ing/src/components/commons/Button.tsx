import { Pressable, Text, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";

const Button = ({ 
    title = "Click", 
    onPress = () => {},
    containerStyle = {} as ViewStyle,
    textStyle = {} as TextStyle
}: { title?: string; 
    onPress?: () => void;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}) => {

    const { theme } = useTheme();

    return (
        <Pressable
            onPress={() => onPress()}
            style={{ 
                backgroundColor: containerStyle.backgroundColor || `${theme.accent}`,
                borderWidth: 3,
                borderColor: `${theme.border}`,
                width: containerStyle.width || "100%",
            }}
            className="p-5 bg-primary rounded-md">
            <Text 
            style={{ 
                color: textStyle.color || theme.textPrimary 
            }}
            className="w-full text-center font-bold">
                {title}
            </Text>
        </Pressable>
    )
}

export default Button;