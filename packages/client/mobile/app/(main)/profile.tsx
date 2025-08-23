import ProfileLink from "@/components/ui/ProfileLink";
import { Image } from "expo-image";
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import ProfileLinks from "@/constants/ProfileLinks";

const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      <View className="">
        <Text className="font-semibold text-3xl">Account</Text>
      </View>
      <View className="bg-white w-full h-[220px] rounded-2xl justify-center items-center">
        <View style={{ width: 140, height: 140 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
            }}
          />
        </View>
        <Text className="font-semibold text-xl">Albert Einstein</Text>
        <Text className="font-medium text-md">albertdoe@gmail.com</Text>
      </View>
      <View className="w-full gap-4">
        {ProfileLinks.map((p, i) => (
          <ProfileLink {...p} key={`${p.title}-${i}`} />
        ))}
      </View>
      <TouchableOpacity
        style={{
          marginTop: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text className="w-full text-center text-red-600 font-semibold text-lg">
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
