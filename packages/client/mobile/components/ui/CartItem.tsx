import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GameCardProps } from "./GameCard";
import { Image } from "expo-image";
import Fontisto from "@expo/vector-icons/Fontisto";
import useCartStore from "@/stores/useCartStore";

const CartItem = ({ game }: { game: GameCardProps }) => {
  const { removeFromCart } = useCartStore();
  function handleRemoveFromCart() {
    removeFromCart(game);
  }
  return (
    <View
      style={{
        paddingVertical: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ width: 80, height: 80 }}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
              source={{ uri: game.image }}
            />
          </View>
          <View style={{ height: 80, justifyContent: "space-between" }}>
            <View style={{ marginBottom: "auto" }}>
              <Text className="font-semibold text-lg">{game.name}</Text>
              <Text style={{ color: "#ccc" }} className="font-medium text-sm">
                {game.category.name}
              </Text>
            </View>
            <View style={{ marginTop: "auto" }}>
              <Text className="font-semibold text-md">
                ₦{game.price.toLocaleString("en-us")}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleRemoveFromCart}
          style={{ marginBottom: "auto" }}
        >
          <Fontisto name="shopping-basket-remove" size={16} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
