import { FlatList, Text } from "react-native";
import { PokemonEntity } from "../../../../../domain/entities";
import { PokemonCard } from "../../../../components";
import { stylesFlatList } from "./PokemonList.styles";

interface PokemonsListProps {
  pokemons: Array<PokemonEntity>;
}

export function PokemonsList({ pokemons }: PokemonsListProps) {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => `${pokemon.name}-${pokemon.id}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={stylesFlatList.container}
    />
  );
}
