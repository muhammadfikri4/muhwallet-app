import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { MainAction } from "./MainAction";
import { MenuList } from "./MenuList/MenuList";

export const MainSection = () => {
  return (
    <View style={style.container}>
      <Header />
      <MainAction />
      <MenuList />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 20,
          // width: "100%",
          overflow: "scroll",
        }}
      >
        <View
          style={{ width: "100%", height: 150, backgroundColor: "red" }}
        ></View>
        <View
          style={{ width: "100%", height: 150, backgroundColor: "red" }}
        ></View>
        <View
          style={{ width: "100%", height: 150, backgroundColor: "red" }}
        ></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
