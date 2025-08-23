import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import useFavoriteStore from "@/stores/useFavoriteStore";
import LikeButton from "./LikeButton";
export interface GameCardProps {
  index?: number;
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: {
    id: string;
    name: string;
  };
  rating?: number;
  isLiked: boolean;
}

const GameCard = (props: GameCardProps) => {
  function handleRoute() {
    router.push(`/(others)/details?id=${props.id}`);
  }
  return (
    <TouchableOpacity
      onPress={handleRoute}
      style={{ width: "48%", alignItems: "flex-start", position: "relative" }}
    >
      <View
        style={{ height: 200 }}
        className="w-full rounded-lg overflow-hidden"
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            overflow: "hidden",
          }}
          contentFit="cover"
          contentPosition={"center"}
          source={{ uri: props.image }}
        />
      </View>
      <Text className="font-semibold text-xl">{props.name}</Text>
      <Text style={{ color: "#ccc" }} className="font-light text-sm">
        {props.category.name}
      </Text>
      <View
        style={{ justifyContent: "space-between", alignItems: "center" }}
        className=" w-full flex-row justify-between"
      >
        <Text className="font-medium text-lg">
          ₦
          {props.price.toLocaleString("en-ng", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text className="font-normal text-sm">5.0</Text>
          <AntDesign name="star" size={18} color="#FFDB58" />
        </View>
      </View>
      <LikeButton
        styles={{ backgroundColor: "black" }}
        color="white"
        game={props}
        liked={props.isLiked!}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default GameCard;
