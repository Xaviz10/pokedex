import { Image } from "react-native";
import React from "react";

export function PokedexIcon() {
  return (
    <Image
      source={require("./pokeball.png")}
      style={{ width: 75, height: 75, top: -10 }}
    />
  );
}
