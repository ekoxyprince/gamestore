import React from "react";
import { View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
interface FormInputType {
  label: string;
  type: string;
  placeHolder: string;
  onInputChange?: Function;
  value?: string;
}
const FormInput = (props: FormInputType) => {
  const [current, setCurrent] = React.useState(props.type);
  function handleIconPress(type: string) {
    setCurrent(type);
  }
  return (
    <View className="flex-1">
      <View className="flex-1 relative w-full">
        <Text>{props.label.replace("_", " ")}</Text>
        <TextInput
          className="w-full border-[1.5px] border-['#ccc'] h-[50px] rounded-lg px-4"
          placeholder={props.placeHolder}
          secureTextEntry={current == "password"}
          onChangeText={props.onInputChange!.bind(
            this,
            props.label.toLocaleLowerCase()
          )}
          value={props.value || ""}
        />
        {props.type == "password" ? (
          current == "password" ? (
            <Feather
              onPress={() => handleIconPress("text")}
              className="absolute right-2 bottom-[50%] translate-y-[50%]"
              name="eye"
              size={20}
              color={"black"}
            />
          ) : (
            <Feather
              onPress={() => handleIconPress("password")}
              className="absolute right-2 bottom-[50%] translate-y-[50%]"
              name="eye-off"
              size={20}
              color={"black"}
            />
          )
        ) : null}
      </View>
    </View>
  );
};

export default FormInput;
