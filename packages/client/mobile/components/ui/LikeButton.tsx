import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import useFavoriteStore from "@/stores/useFavoriteStore";
import { GameCardProps } from "./GameCard";
interface LikeButtonProps {
  liked: boolean;
  game: GameCardProps;
  styles: StyleProp<ViewStyle>;
  color: string;
}

const LikeButton = ({ liked, styles, color, game }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = React.useState(liked);
  const { addFavorite } = useFavoriteStore();
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    addFavorite(game);
  };
  return (
    <TouchableOpacity
      onPress={handleLikeClick}
      style={[
        {
          width: 36,
          height: 36,
          borderRadius: 18,
          position: "absolute",
          top: 10,
          right: 10,
          alignItems: "center",
          justifyContent: "center",
        },
        styles,
      ]}
    >
      {!isLiked ? (
        <Feather name="heart" size={18} color={color} />
      ) : (
        <AntDesign name="heart" size={18} color={color} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LikeButton;
