import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Href, router } from "expo-router";
interface ProfileLinkProps {
  image: string;
  url: string;
  title: string;
}
const ProfileLink = (props: ProfileLinkProps) => {
  function pushRoute() {
    router.push(props.url as Href);
  }
  return (
    <TouchableOpacity
      onPress={pushRoute}
      style={{
        elevation: 0.8,
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="w-full bg-white flex-row px-4"
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <View style={{ width: 30, height: 30 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            source={{
              uri: props.image,
            }}
          />
        </View>
        <Text className="font-semibold text-md">{props.title}</Text>
      </View>
      <FontAwesome name="angle-right" size={24} color="#c0c0c0" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ProfileLink;
