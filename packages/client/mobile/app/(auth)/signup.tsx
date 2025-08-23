import React from "react";
import { View, Text } from "react-native";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";

function signup() {
  function handleButtonPress() {}
  return (
    <View className="flex-1 gap-4 mt-4">
      <View className="gap-1">
        <Text className="font-semibold text-3xl">Getting Started</Text>
        <Text className="font-normal text-sm">
          Provide the following information to get started.
        </Text>
      </View>
      <View className="flex-[0.7] flex-col">
        <FormInput label="Fullname" placeHolder="John Doe" type="text" />
        <FormInput
          label="Email"
          placeHolder="agba.dev@gmail.com"
          type="email"
        />
        <FormInput label="Password" placeHolder="********" type="password" />
        <FormInput
          label="Confirm Password"
          placeHolder="********"
          type="password"
        />
        <PrimaryButton onPress={handleButtonPress}>Register</PrimaryButton>
      </View>
    </View>
  );
}

export default signup;
