import { Image } from "react-native";
import React from "react";

export function ArrowBack() {
  return (
    <Image
      source={require("./arrowBack.png")}
      style={{ width: 32, height: 32 }}
    />
  );
}
