import React from "react";
import { View, Text } from "react-native";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import useAuthStore from "@/stores/useAuthStore";
import useMutate from "@/hooks/useMutate";
import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";
import { useRouter } from "expo-router";

function signup() {
  const auth = useAuthStore();
  const router = useRouter();
  const [form, setForm] = React.useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const { mutateAsync } = useMutate(
    "/api/v1/user/auth/signup",
    ["signup"],
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
    if (form.password !== form.confirm_password) {
      return toast.error("Passwords do not match", {
        duration: 2000,
        position: ToastPosition.BOTTOM,
      });
    }
    await mutateAsync(form, {
      onSettled: (data) => {
        if (data) {
          router.push("/(auth)/signin");
        }
      },
    });
  }
  return (
    <View className="flex-1 gap-4 mt-4">
      <View className="gap-1">
        <Text className="font-semibold text-3xl">Getting Started</Text>
        <Text className="font-normal text-sm">
          Provide the following information to get started.
        </Text>
      </View>
      <View className="flex-[0.7] flex-col">
        <FormInput
          value={form.fullname}
          onInputChange={handleFormInput}
          label="Fullname"
          placeHolder="John Doe"
          type="text"
        />
        <FormInput
          label="Email"
          placeHolder="agba.dev@gmail.com"
          type="email"
          value={form.email}
          onInputChange={handleFormInput}
        />
        <FormInput
          value={form.password}
          label="Password"
          placeHolder="********"
          type="password"
          onInputChange={handleFormInput}
        />
        <FormInput
          label="Confirm_Password"
          placeHolder="********"
          type="password"
          value={form.confirm_password}
          onInputChange={handleFormInput}
        />
        <PrimaryButton onPress={handleButtonPress}>Register</PrimaryButton>
      </View>
    </View>
  );
}

export default signup;
