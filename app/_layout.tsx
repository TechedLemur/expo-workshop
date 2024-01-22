import { Slot, Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>

      {/* Toast message */}
      <Toast position="bottom" bottomOffset={50} />
    </>
  );
}
