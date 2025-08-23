import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
interface OrderPropTypes {
  status: string;
  category: string;
  id: string;
  quantity: number;
  createdAt: string;
}

const OrderCard = (props: OrderPropTypes) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomColor: "#c0c0c0",
        borderBottomWidth: 1.4,
        paddingVertical: 15,
        gap: 3,
      }}
      className="flex-row"
    >
      <View
        style={{
          backgroundColor: "#787676",
          borderRadius: 17.5,
          width: 35,
          height: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="shopping-bag" size={22} color="#A3A1A2" />
      </View>
      <View>
        <View
          style={{
            paddingVertical: 1,
            borderRadius: 10,
            paddingHorizontal: 6,
            alignSelf: "flex-start",
            flexDirection: "row",
            backgroundColor: props.status == "processing" ? "orange" : "green",
          }}
          className=""
        >
          <Text className="text-white font-medium text-sm">{props.status}</Text>
        </View>
        <View style={{ alignItems: "center" }} className="flex-row">
          <Text className="text-black font-semibold text-md">
            {props.category}
          </Text>
          <Entypo name="dot-single" size={20} color="#c0c0c0" />
          <Text
            style={{ color: "#26282a", opacity: 0.7 }}
            className="font-semibold text-md"
          >
            #{props.id}
          </Text>
        </View>
        <View style={{ alignItems: "center" }} className="flex-row">
          <View
            style={{ opacity: 0.2, alignItems: "center", gap: 1 }}
            className="flex-row"
          >
            <Ionicons name="git-network-outline" size={14} color="black" />
            <Text className="text-black font-medium text-sm">
              {props.quantity > 10 ? "10+" : props.quantity} Games
            </Text>
          </View>
          <Entypo name="dot-single" size={20} color="#c0c0c0" />
          <View
            style={{ opacity: 0.2, alignItems: "center", gap: 1 }}
            className="flex-row"
          >
            <AntDesign name="clockcircleo" size={14} color="black" />
            <Text className="text-black font-medium text-sm">
              {new Date(props.createdAt).toLocaleTimeString("en-us", {})}
            </Text>
          </View>
          <Entypo name="dot-single" size={20} color="#c0c0c0" />
          <View
            style={{ opacity: 0.2, alignItems: "center", gap: 1 }}
            className="flex-row"
          >
            <Feather name="calendar" size={14} color="black" />
            <Text className="text-black font-medium text-sm">
              {new Date(props.createdAt)
                .toLocaleDateString("en-ng")
                .split("/")
                .join("-")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default OrderCard;
