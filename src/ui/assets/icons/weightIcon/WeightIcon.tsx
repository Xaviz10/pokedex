import { Image } from "react-native";
import React from "react";

export function WeightIcon() {
  return (
    <Image
      source={require("./weightIcon.png")}
      style={{ width: 11, height: 12 }}
    />
  );
}
