import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "../../navigation";
import { usePokedexViewModel } from "../../viewModels";
import { PokemonsList } from "./components";

type PokedexScreenProps = NativeStackScreenProps<RootTabParamList, "Pokedex">;

export type PokedexScreenParamList = {
  Pokemon: undefined;
};

export function PokedexScreen({ navigation }: PokedexScreenProps) {
  const { pokemons, handleGetNewPokemons } = usePokedexViewModel();
  return (
    <SafeAreaView>
      {pokemons.length > 0 && (
        <PokemonsList
          pokemons={pokemons}
          handleGetNewPokemons={handleGetNewPokemons}
        />
      )}
      {/* <Button
        title="Go Pokemon"
        onPress={() => navigation.navigate("Pokemon")}
      /> */}
    </SafeAreaView>
  );
}
