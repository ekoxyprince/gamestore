import React from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/ui/BackButton";
import useCartStore from "@/stores/useCartStore";
import CartItem from "@/components/ui/CartItem";
import ListText from "@/components/ui/ListText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Linking } from "react-native";
import { router } from "expo-router";

const Checkout = () => {
  const { cart, resetCart } = useCartStore();
  const phone = "2349018579950";
  const message =
    "Hello i just placed an Order with ID #56435 kindly validate my order";
  function handlePay() {
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        resetCart();
        router.push("/(main)/home");
        return Linking.openURL(url);
      }
    });
  }
  return (
    <SafeAreaView style={{ gap: 10 }} className="flex-1 px-4">
      <View
        style={{ gap: 90, marginVertical: 5 }}
        className="items-center flex-row"
      >
        <BackButton />
        <Text className="font-semibold text-xl">Checkout</Text>
      </View>
      <View style={{ flex: 0.5 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          //inverted={true} --use this in cases of chats
          data={cart.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CartItem game={item} />;
          }}
        />
      </View>
      <View style={{ flex: 0.5, gap: 10 }}>
        <Text className="font-semibold text-lg">Order Information</Text>
        <View
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}
          className="w-full gap-1 border-b"
        >
          <ListText
            title={`Total (${cart.items.length} Items)`}
            value={`₦${cart.total.toLocaleString("en-us")}`}
          />
          <ListText title="Waybill fee" value="₦0.00" />
          <ListText title="Hard Drive" value="₦0.00" />
          <ListText title="Discount" value="₦0.00" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ListText
            title={`Sub Total`}
            value={`₦${cart.total.toLocaleString("en-us")}`}
          />
        </View>
        <View>
          <PrimaryButton disable={cart.items.length <= 0} onPress={handlePay}>
            Pay
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Checkout;
