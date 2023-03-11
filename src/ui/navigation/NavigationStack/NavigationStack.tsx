import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PokedexScreen, FavoriteScreen } from "../../screens";

export type RootStackParamList = {
  Pokedex: undefined;
  Favorite: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
