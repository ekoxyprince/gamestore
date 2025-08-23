import { Pressable, Text, GestureResponderEvent, View } from "react-native";
import React from "react";
type EventFunction = (event: GestureResponderEvent) => void;
interface PrimaryButtonProps extends React.PropsWithChildren {
  onPress: EventFunction;
  disable?: boolean;
}

const PrimaryButton = ({
  children,
  onPress,
  disable = false,
}: PrimaryButtonProps) => {
  return (
    <View className="overflow-hidden rounded-full">
      <Pressable
        disabled={disable}
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={{ elevation: 0.8 }}
        className="w-full h-[50px] rounded-full bg-black items-center justify-center"
      >
        <Text className="text-white font-semibold text-lg">{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
