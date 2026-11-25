import { TextInput, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { useEffect } from "react";


const Input = (
    { value, onChangeText, placeholder, secureTextEntry, keyboardType, componentStyle = {}, textStyle = {}, limit }:
        {
            value?: string;
            onChangeText?: (text: string) => void;
            placeholder?: string;
            secureTextEntry?: boolean;
            keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
            componentStyle?: ViewStyle;
            textStyle?: TextStyle;
            limit?: number;
        }
) => {

    const { theme } = useTheme();


    const handleChangeText = (text: string) => {
        if (limit && text.length > limit) return;

        onChangeText?.(text);
    };

    return (
        <TextInput
            className="w-full h-12 px-4 py-2 rounded-md"
            value={value}
            onChangeText={handleChangeText}
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
            maxLength={limit}
        />

    )
}


export default Input;