import { Image } from "react-native";
import React from "react";

export function HeightIcon() {
  return (
    <Image
      source={require("./heightIcon.png")}
      style={{ width: 8, height: 14 }}
    />
  );
}
