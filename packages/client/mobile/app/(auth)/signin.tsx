import React from "react";
import { View, Text } from "react-native";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";

function signin() {
  const router = useRouter();
  function handleButtonPress() {
    router.push("/(main)/home");
  }
  return (
    <View className="flex-1 gap-4 mt-4">
      <View className="gap-1">
        <Text className="font-semibold text-3xl">Welcome Back</Text>
        <Text className="font-normal text-sm">
          Provide your login details to access your account.
        </Text>
      </View>
      <View className="flex-[0.4] flex-col">
        <FormInput
          label="Email"
          placeHolder="agba.dev@gmail.com"
          type="email"
        />
        <FormInput label="Password" placeHolder="*********" type="password" />
        <PrimaryButton onPress={handleButtonPress}>Continue</PrimaryButton>
      </View>
    </View>
  );
}

export default signin;
