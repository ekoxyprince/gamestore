import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import useCartStore from "@/stores/useCartStore";
import { GameCardProps } from "./GameCard";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";
interface CartButtonProps {
  hasItem: boolean;
}

const CartButton = ({ hasItem }: CartButtonProps) => {
  const { cart } = useCartStore();
  const navigateToCheckOut = () => {
    router.push("/(others)/checkout");
  };
  const cartBtnStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: "50%",
      right: hasItem
        ? withTiming(0, { duration: 500 })
        : withTiming(-20, { duration: 500 }),
      width: 40,
      height: 40,
    };
  });
  return (
    <Animated.View style={cartBtnStyle}>
      <TouchableOpacity
        onPress={navigateToCheckOut}
        disabled={cart.items.length <= 0}
        style={{
          borderRadius: 8,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          elevation: 5,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: -5,
              width: 15,
              height: 15,
              borderRadius: 7.5,
              top: -15,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              elevation: 0.8,
            }}
          >
            <Text style={{ color: "#000" }} className="font-semibold text-sm">
              {cart.items.length > 9 ? "9+" : cart.items.length}
            </Text>
          </View>
          <Feather name="shopping-cart" size={22} color={"#fff"} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default CartButton;
