import { FlatList, ActivityIndicator } from "react-native";
import { PokemonEntity } from "../../../../../domain/entities";
import { PokemonCard } from "../../../../components";
import { stylesFlatList } from "./PokemonList.styles";

interface PokemonsListProps {
  pokemons: Array<PokemonEntity>;
  handleGetNewPokemons: (data: any) => void;
  navigateToPokemon: (id: number) => void;
}

export function PokemonsList({
  pokemons,
  handleGetNewPokemons,
  navigateToPokemon,
}: PokemonsListProps) {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => `${pokemon.name}-${pokemon.id}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} navigateToPokemon={navigateToPokemon} />
      )}
      contentContainerStyle={stylesFlatList.container}
      onEndReached={handleGetNewPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          color={"#DC0A2D"}
          style={stylesFlatList.spinner}
        />
      }
    />
  );
}
