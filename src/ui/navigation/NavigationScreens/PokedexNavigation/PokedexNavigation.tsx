import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { PokedexScreen, PokemonScreen } from "../../../screens";
import { RootTabParamList } from "../../NavigationTab";

const Stack = createNativeStackNavigator<RootTabParamList>();

export function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "", headerShown: false, headerTitle: "" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerShown: false, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
