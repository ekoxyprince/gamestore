import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import Categories from "@/constants/Categories";
import { Image } from "expo-image";
import Games from "@/constants/Games";
import GameCard from "@/components/ui/GameCard";

const Home = () => {
  const [currentCategory, setCurrentCategory] = React.useState("all");
  const scale = useSharedValue(0);
  const height = useSharedValue(0);
  const searchWrapperStyle = useAnimatedStyle(() => {
    return {
      // transform: [{ scale: scale.value }],
      maxHeight: height.value,
      opacity: scale.value,
    };
  });
  function toggleSearchBar() {
    if (scale.value == 0) {
      scale.value = withTiming(1, { duration: 200 });
      height.value = withTiming(50, { duration: 200 });
    } else {
      scale.value = withTiming(0, { duration: 200 });
      height.value = withTiming(0, { duration: 200 });
    }
  }
  function selectCategory(category: string) {
    setCurrentCategory(category);
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      className="flex-1 gap-2"
    >
      <View
        style={{ justifyContent: "space-between" }}
        className="w-full items-center flex-row justify-between "
      >
        <View className="">
          <Text style={{ color: "#ccc" }} className="font-medium text-xl">
            Hello Welcome 👋
          </Text>
          <Text className="font-semibold text-3xl">Albert Einstein</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
          }}
          onPress={toggleSearchBar}
        >
          <Feather name="search" size={22} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[searchWrapperStyle]}
        className="w-full relative flex-row gap-2"
      >
        <TextInput
          style={{ paddingHorizontal: 30, flex: 0.78 }}
          placeholder="Search Games..."
          placeholderTextColor={"#ccc"}
          className="border-[1.5px] border-['#ccc'] h-full rounded-lg text-xl"
        />
        <Feather
          style={{
            top: "50%",
            left: 2,
            color: "#ccc",
            transform: [{ translateY: "-50%" }],
          }}
          className="absolute "
          name="search"
          size={24}
          color={"black"}
        />
        <TouchableOpacity
          style={{ flex: 0.2, elevation: 4 }}
          className="w-[50px] h-full bg-black rounded-lg"
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              transform: [{ scale: 0.55 }],
            }}
            source={require("@/assets/icons/filter.png")}
          />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Categories.map((c, i) => (
          <TouchableOpacity
            onPress={selectCategory.bind(this, c.id)}
            key={c.id}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 5,
              marginLeft: i == 0 ? 0 : 6,
            }}
            className={` rounded-lg ${currentCategory == c.id ? "bg-black" : "bg-none"}`}
          >
            <Text
              style={{ color: currentCategory == c.id ? "white" : "black" }}
              className="font-normal text-lg"
            >
              {c.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 10,
          marginBottom: 26,
        }}
        className="flex-1"
      >
        {Games.map((g, i) => {
          return <GameCard key={g.id} {...g} index={i} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Home;
