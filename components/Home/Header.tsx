import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={style.container}>
      <Text style={style.textBrand}>Muh Wallet</Text>
      <View style={style.infoUserContainer}>
        <View>
          <Text style={style.infoUser}>Hi, Fikri</Text>
          <Text style={style.infoUserDescription}>Your Available Balance</Text>
        </View>
        <Text style={style.infoUserAmount}>$10.000.000</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  textBrand: {
    fontWeight: "bold",
    fontSize: 28,
  },
  infoUserContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  infoUser: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoUserDescription: {
    fontSize: 16,
    color: "#595F67",
  },
  infoUserAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
