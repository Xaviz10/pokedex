import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "../../navigation";
import { usePokedexViewModel } from "../../viewModels";
import { PokemonsList } from "./components";
import { StyledPokedexScreenActivityIndicator } from "./PokedexScreen.styles";

type PokedexScreenProps = NativeStackScreenProps<RootTabParamList, "Pokedex">;

export type PokedexScreenParamList = {
  Pokemon: undefined;
};

export function PokedexScreen({ navigation }: PokedexScreenProps) {
  const { pokemons, handleGetNewPokemons, navigateToPokemon } =
    usePokedexViewModel();
  return (
    <SafeAreaView>
      {pokemons.length > 0 ? (
        <PokemonsList
          pokemons={pokemons}
          handleGetNewPokemons={handleGetNewPokemons}
          navigateToPokemon={navigateToPokemon}
        />
      ) : (
        <StyledPokedexScreenActivityIndicator>
          <ActivityIndicator
            size={"large"}
            style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
            color={"red"}
          />
        </StyledPokedexScreenActivityIndicator>
      )}
      {/* <Button
        title="Go Pokemon"
        onPress={() => navigation.navigate("Pokemon")}
      /> */}
    </SafeAreaView>
  );
}
