import { Stack } from "expo-router";
import { ThemeProvider } from "../theme/ThemeProvider";
import "../global.css";

export default function TabLayout() {

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
