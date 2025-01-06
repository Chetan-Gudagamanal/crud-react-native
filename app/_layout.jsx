import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <ThemeProvider>
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="todos/[id]" />
      </Stack>
    </SafeAreaProvider>
    </ThemeProvider>
  );
}
