import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MainSection } from "./components/Home/MainSection";
import { Navbar } from "./components/global/Navbar";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <MainSection />
        <StatusBar style="auto" />
      </View>
      <Navbar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 70,
  },
});
