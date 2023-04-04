import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FavoriteScreen, AccountScreen } from "../../screens";
import { PokedexIcon } from "../../assets";
import { PokedexNavigation } from "../NavigationScreens";

export type RootTabParamList = {
  Pokedex: undefined;
  PokedexNavigator: undefined;
  Favorite: undefined;
  Account: undefined;
  Pokemon: { id: number };
};
const Tab = createBottomTabNavigator<RootTabParamList>();

export function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favorites",
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokedexNavigator"
        component={PokedexNavigation}
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "",
          tabBarIcon: () => <PokedexIcon />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: "Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
