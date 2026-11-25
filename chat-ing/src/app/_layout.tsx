import { Stack } from "expo-router";
import { ThemeProvider } from "../theme/ThemeProvider";
import "../global.css";

export default function TabLayout() {

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="authenticate" />
      </Stack>
    </ThemeProvider>
  );
}
