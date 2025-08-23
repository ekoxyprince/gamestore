import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import OrderCard from "@/components/ui/OrderCard";
import OrdersData from "@/constants/Orders";
import { useColorScheme, ColorSchemeName } from "react-native";
import { Colors, ColorTypes } from "@/constants/Colors";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Orders = () => {
  const [currentCategory, setCurrentCategory] = React.useState<
    "processing" | "delivered"
  >("processing");
  const handleCategorySwitch = (category: "processing" | "delivered") => {
    setCurrentCategory(category);
  };

  const Scheme = useColorScheme();
  const overlayStyles = useAnimatedStyle(() => {
    return {
      left:
        currentCategory == "processing"
          ? withTiming(0, { duration: 300 })
          : withTiming("50%", { duration: 300 }),
      transform: [
        {
          translateX:
            currentCategory == "delivered"
              ? withTiming(6, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      <View className="">
        <Text
          style={{ color: Colors[Scheme as keyof ColorTypes].textColorPrimary }}
          className="font-semibold text-3xl"
        >
          Orders
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#A3A1A2",
          borderRadius: 12,
          padding: 3,
          flexDirection: "row",
          gap: 6,
          position: "relative",
          overflow: "hidden",
        }}
        className=" w-full h-[50px]"
      >
        <Animated.View style={[styles.overlay, overlayStyles]}></Animated.View>
        <TouchableOpacity
          className="w-[49%]  items-center justify-center"
          onPress={handleCategorySwitch.bind(this, "processing")}
          style={{
            // backgroundColor:
            //   currentCategory == "processing" ? "#000000" : "#c0c0c0",
            opacity: currentCategory !== "processing" ? 0.6 : 1,
            borderRadius: 10,
          }}
        >
          <Text className="font-medium text-lg text-white">Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor:
            //   currentCategory == "delivered" ? "#000000" : "#c0c0c0",
            opacity: currentCategory !== "delivered" ? 0.6 : 1,
            borderRadius: 10,
          }}
          onPress={handleCategorySwitch.bind(this, "delivered")}
          className="w-[49%] items-center justify-center "
        >
          <Text className="font-medium text-lg text-white">Delivered</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          gap: 10,
          marginBottom: 20,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 15,
          marginTop: 10,
          elevation: 2,
        }}
      >
        {OrdersData.filter((o, i) => o.status == currentCategory).map(
          (o, i) => (
            <OrderCard key={o.id} {...o} />
          )
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "#000",
    width: "50%",
    height: 50,
  },
});

export default Orders;
