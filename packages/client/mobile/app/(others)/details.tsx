import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Games from "@/constants/Games";
import { Image } from "expo-image";
import BackButton from "@/components/ui/BackButton";
import LikeButton from "@/components/ui/LikeButton";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import useCartStore from "@/stores/useCartStore";
import CartButton from "@/components/ui/CartButton";
import Animated from "react-native-reanimated";

interface DetailsRouteProps extends RouteProp<Record<string, any>> {
  params: { id: string };
}
const Details = () => {
  const { params } = useRoute<DetailsRouteProps>();
  const { cart, addToCart, resetCart } = useCartStore();
  const [hasAdded, setHasAdded] = React.useState<boolean>(false);
  const game = Games.find((g) => g.id == params!.id);
  if (!game) return;
  const [exists, setExists] = React.useState(
    cart.items.some((c) => c.id == game!.id)
  );
  function addGameToCart() {
    if (!exists) {
      addToCart(game!);
      setHasAdded(true);
      setExists(true);
    }
    //resetCart();
  }
  return (
    <SafeAreaView className="flex-1 p-4 gap-4 relative">
      <View style={{ flex: 0.58 }}>
        <View style={{ flex: 1, position: "relative" }}>
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
            resizeMode={"cover"}
            sharedTransitionTag={`item.${game.id}.image`}
            source={{ uri: game?.image }}
          />
          <View style={{ position: "absolute", top: 10, left: 10 }}>
            <BackButton />
          </View>
          <View style={{ position: "absolute", top: 0, right: 0 }}>
            <LikeButton
              game={game}
              liked={game.isLiked!}
              styles={{ backgroundColor: "#fff" }}
              color="black"
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 0.4, gap: 10 }}>
        <View>
          <Animated.Text
            className="font-semibold text-3xl"
            sharedTransitionTag={`item.${game.id}.name`}
          >
            {game.name}
          </Animated.Text>
          <Animated.Text
            sharedTransitionTag={`item.${game.id}.category`}
            style={{ color: "#a0a0a0" }}
            className="font-medium text-md"
          >
            {game.category.name}
          </Animated.Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text className="font-semibold text-sm">5.0</Text>
            <AntDesign name="star" size={18} color="#FFDB58" />
          </View>
        </View>
        <View>
          <Text
            style={{ color: "#a0a0a0", fontSize: 15 }}
            className="font-semibold text-lg"
            numberOfLines={6}
          >
            {game.description}
          </Text>
        </View>
        <View>
          <PrimaryButton disable={exists} onPress={addGameToCart}>
            {!exists
              ? `🛒 Add to cart | ₦${game.price.toLocaleString("en-us")}`
              : "Added to cart"}
          </PrimaryButton>
        </View>
      </View>
      <CartButton hasItem={hasAdded} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Details;
