import { TextInput, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";


const Input = (
    { value, onChangeText, placeholder, secureTextEntry, keyboardType, componentStyle = {}, textStyle = {} }:
    {
        value?: string;
        onChangeText?: (text: string) => void;
        placeholder?: string;
        secureTextEntry?: boolean;
        keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
        componentStyle?: ViewStyle;
        textStyle?: TextStyle;
    }
) => {

    const { theme } = useTheme();


    return (
        <TextInput
            className="w-full h-12 px-4 py-2 rounded-md"
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[{ 
                ...componentStyle,
                backgroundColor: componentStyle.backgroundColor || theme.inputBackground,
                color: textStyle.color || theme.textPrimary,
                borderColor: componentStyle.borderColor || theme.border,
                borderWidth: componentStyle.borderWidth || 3,
            }]}
        />

    )
}


export default Input;