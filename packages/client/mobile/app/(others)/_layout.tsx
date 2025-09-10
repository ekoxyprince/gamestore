import { Stack } from "expo-router";

export default function OtherLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="details"
        options={{
          animation: "fade",
          presentation: "card",
        }}
      />
      <Stack.Screen name="checkout" />
      <Stack.Screen name="reset-password" />
    </Stack>
  );
}
