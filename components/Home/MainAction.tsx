import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "../../assets/icons/Curved/Navigation.svg";
import Topup from "../../assets/icons/Curved/Topup.svg";
import Withdraw from "../../assets/icons/Curved/Withdraw.svg";

export const MainAction = () => {
  return (
    <>
      <View style={style.container}>
        <View style={style.menuContainer}>
          <Topup {...style.iconMenu} />
          <Text style={style.labelIcon}>Top Up</Text>
        </View>
        <View style={style.menuContainer}>
          <Navigation {...style.iconMenu} />
          <Text style={style.labelIcon}>Top Up</Text>
        </View>
        <View style={style.menuContainer}>
          <Withdraw {...style.iconMenu} />
          <Text style={style.labelIcon}>Top Up</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#000",
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconMenu: {
    width: 35,
    height: 35,
    tintColor: "#fff",
  },
  labelIcon: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
