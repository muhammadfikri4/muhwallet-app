import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface CardProps {
  label: string;
  Icon: React.FC<SvgProps>;
}

export const Card: React.FC<CardProps> = ({ Icon, label }) => {
  return (
    <View style={style.card}>
      <Icon {...style.icon} />
      <Text style={style.textIcon}>{label}</Text>
    </View>
  );
};

const style = StyleSheet.create({
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
