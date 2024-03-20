import { Platform, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text>cart</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
