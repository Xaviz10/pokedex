import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { PokedexScreen, FavoriteScreen } from "../../screens";

export type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={PokedexScreen} />
      <Drawer.Screen name="Settings" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}
