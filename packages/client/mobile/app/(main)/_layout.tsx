import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBar from "@/components/ui/TabBar";

export default function MainLayout() {
  return (
    <SafeAreaView style={{ paddingBottom: 20 }} className="flex-1 relative">
      <TabBar />
      <View className="flex-1 px-4 my-2">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
