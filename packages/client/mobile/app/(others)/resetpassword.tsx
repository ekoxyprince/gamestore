import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Resetpassword = () => {
  return (
    <SafeAreaView>
      <View>
        <Animated.Text sharedTransitionTag="tag.test">Logout</Animated.Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Resetpassword;
