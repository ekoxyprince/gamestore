import React from "react";
import { View, Text } from "react-native";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";
import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";
import useAuthStore from "@/stores/useAuthStore";
import useMutate from "@/hooks/useMutate";

function signin() {
  const router = useRouter();
  const auth = useAuthStore();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const { mutateAsync } = useMutate(
    "/api/v1/user/auth/signin",
    ["signin"],
    "post"
  );
  function handleFormInput(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  async function handleButtonPress() {
    let values = Object.values(form);
    if (values.some((v) => v == "")) {
      return toast.error("All fields are required", {
        duration: 2000,
        position: ToastPosition.BOTTOM,
      });
    }
    await mutateAsync(form, {
      onSettled: (data) => {
        if (data) {
          auth.login(data.accessToken);
        }
      },
    });
    console.log("Passed");
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
          value={form.email}
          onInputChange={handleFormInput}
        />
        <FormInput
          label="Password"
          placeHolder="*********"
          type="password"
          value={form.password}
          onInputChange={handleFormInput}
        />
        <PrimaryButton onPress={handleButtonPress}>Continue</PrimaryButton>
      </View>
    </View>
  );
}

export default signin;
