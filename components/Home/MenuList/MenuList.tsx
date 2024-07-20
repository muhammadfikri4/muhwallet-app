import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Car,
  Grid,
  House,
  Internet,
  Invest,
  TV,
  Thunder,
  Water,
} from "../../../utils/image";
import { Card } from "./Card";

export const MenuList = () => {
  return (
    <View style={style.container}>
      {/* {MenuListApp.map((item, index) => (
        <View style={[style.semiContaiener]}>
          {item.map((subItem, index) => (
            <Card label={subItem.label} Icon={subItem.icon} key={index} />
          ))}
        </View>
      ))} */}
      <Card Icon={Internet} label="Internet" />
      <Card Icon={Water} label="Water" />
      <Card Icon={Thunder} label="Thunder" />
      <Card Icon={TV} label="TV" />
      <Card Icon={Car} label="Car" />
      <Card Icon={House} label="House" />
      <Card Icon={Invest} label="Invest" />
      <Card Icon={Grid} label="Grid" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  semiContaiener: {
    // flex: 1,
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#595F67",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
