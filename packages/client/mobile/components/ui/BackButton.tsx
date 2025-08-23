import { router } from "expo-router";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
      <FontAwesome name="angle-left" size={27} color="#0c0c0c" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BackButton;
