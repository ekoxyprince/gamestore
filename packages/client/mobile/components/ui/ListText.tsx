import React from "react";
import { StyleSheet, View, Text } from "react-native";
type ListTextProps = {
  title: string;
  value: string;
};

const ListText = ({ title, value }: ListTextProps) => {
  return (
    <View className="w-full flex-row justify-between">
      <Text
        style={{ fontSize: 15, color: "#787676" }}
        className="font-medium text-lg"
      >
        {title}
      </Text>
      <Text className="font-semibold text-lg">{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListText;
