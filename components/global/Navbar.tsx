import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Account from "../../assets/icons/Curved/Account.png";
import Home from "../../assets/icons/Curved/House.png";
import Invoice from "../../assets/icons/Curved/Invoice.png";
import Notif from "../../assets/icons/Curved/Notif.png";
import QR from "../../assets/icons/Curved/QR.png";

export const Navbar = () => {
  return (
    <View style={bottomBar.barContainer}>
      <View style={bottomBar.bar}>
        <Image source={Home} style={bottomBar.icon} />
        <Image source={Invoice} style={bottomBar.icon} />
        <View style={bottomBar.centerIconContainer}>
          <Image source={QR} style={bottomBar.centerIcon} />
        </View>
        <Image source={Notif} style={bottomBar.icon} />
        <Image source={Account} style={bottomBar.icon} />
      </View>
    </View>
  );
};

const bottomBar = StyleSheet.create({
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    borderWidth: 1.5,
    borderColor: "#979797",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingVertical: 50,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,.5)",
  },
  barContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  centerIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    width: 60,
    height: 60,
    padding: 30,
    borderRadius: 100,
  },
  icon: { width: 30, height: 30 },
  centerIcon: { width: 25, height: 25 },
});
