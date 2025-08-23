import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import {
  Octicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { usePathname } from "expo-router";

export function TabBar() {
  const pathname = usePathname();

  const homeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            pathname == "/home"
              ? withTiming(1, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });
  const shopAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            pathname == "/orders"
              ? withTiming(1, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });
  const favAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            pathname == "/favorite"
              ? withTiming(1, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });
  const profileeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            pathname == "/profile"
              ? withTiming(1, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });
  return (
    <View
      style={{
        bottom: 20,
        left: 0,
        right: 0,
        position: "absolute",
        pointerEvents: "auto",
        height: 55,
      }}
      className="w-full px-4"
    >
      <View
        style={{
          height: 58,
          flexDirection: "row",
          paddingHorizontal: 25,
          alignItems: "center",
          justifyContent: "space-between",
          elevation: 2,
          zIndex: 100,
        }}
        className="w-full bg-black rounded-full items-center"
      >
        <Link href={"/(main)/home"} asChild>
          <TouchableOpacity style={styles.tabLink}>
            <Octicons name="home" size={18} color={"white"} />
            <Animated.View
              style={[styles.dot, homeAnimatedStyle]}
            ></Animated.View>
          </TouchableOpacity>
        </Link>
        <Link href={"/(main)/orders"} asChild>
          <TouchableOpacity style={styles.tabLink}>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={18}
              color={"white"}
            />
            <Animated.View
              style={[styles.dot, shopAnimatedStyle]}
            ></Animated.View>
          </TouchableOpacity>
        </Link>
        <Link href={"/(main)/favorite"} asChild>
          <TouchableOpacity style={styles.tabLink}>
            <Feather name="heart" size={18} color={"white"} />
            <Animated.View
              style={[styles.dot, favAnimatedStyle]}
            ></Animated.View>
          </TouchableOpacity>
        </Link>
        <Link href={"/(main)/profile"} asChild>
          <TouchableOpacity style={styles.tabLink}>
            <FontAwesome5 name="user" size={18} color={"white"} />
            <Animated.View
              style={[styles.dot, profileeAnimatedStyle]}
            ></Animated.View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tabLink: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(225,225,225,0.25)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "white",
    position: "absolute",
    bottom: 2,
  },
});
export default TabBar;
