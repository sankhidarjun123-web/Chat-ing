import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = {
    light: {
        background: "#F8F5FC",
        surface: "#FFFFFF",
        surfaceSecondary: "#F0E5FA",
        primary: "#934CC5",
        primaryHover: "#7D3EAD",
        accent: "#E77EB8",
        textPrimary: "#332044",
        textSecondary: "#897B93",
        border: "#E8DDEE",
        messageSent: "#EBD8F8",
        messageReceived: "#FFFFFF",
        inputBackground: "#F0E5FA",
        activeNavigation: "#934CC5",
        success: "#45A982",
        error: "#DE647B",
        notification: "#E77EB8",
    },

    dark: {
        background: "#17121F",
        surface: "#241B2D",
        surfaceSecondary: "#30233C",
        primary: "#C58AE8",
        primaryHover: "#D49CF0",
        accent: "#EF91C5",
        textPrimary: "#F8F0FF",
        textSecondary: "#B3A5BC",
        border: "#392C43",
        messageSent: "#57366F",
        messageReceived: "#30263A",
        inputBackground: "#292033",
        activeNavigation: "#D28BEF",
        success: "#63C69B",
        error: "#F08094",
        notification: "#EF91C5",
    },
};

/* Theme context return type */
type Theme = "light" | "dark";
interface ThemeContextProps {
    theme: typeof colors.light;
    mode: Theme;
    toggleTheme: () => void;
    isThemeLoaded: boolean;
}


/*Theme Context*/
const ThemeContext = createContext<ThemeContextProps | null>(null);


/*Theme Provider*/
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    const [mode, setMode] = useState<Theme>("light");
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);


    useEffect(() => {

        /*Theme Load at the start*/
        const loadTheme = async () => {

            try {
                const savedTheme = await AsyncStorage.getItem("theme");

                if (savedTheme === "light" || savedTheme === "dark") {
                    setMode(savedTheme);
                }
            } catch (err) {

                if (err instanceof Error) {
                    console.error("Error loading theme from AsyncStorage:", err.message);
                }
            } finally {
                setIsThemeLoaded(true);
            }
        }

        loadTheme();
    }, []);


    /*Theme set function*/
    const setTheme = async (newMode: Theme) => {

        try {
            setMode(newMode);
            await AsyncStorage.setItem("theme", newMode);
        } catch (err) {
            if (err instanceof Error) {
                console.error("Error saving theme to AsyncStorage:", err.message);
            }
        }
    }

    const toggleTheme = () => {
        setTheme(mode === "light" ? "dark" : "light");
    }


    useEffect(() => {
        setTheme(mode);
    }, [mode]);

    return <ThemeContext.Provider value={{ theme: colors[mode], mode, toggleTheme, isThemeLoaded }}>
        {children}
    </ThemeContext.Provider>
}



/*Custom Hook to use Theme Context*/ 

export const useTheme = () => {

    return useContext(ThemeContext);
}

