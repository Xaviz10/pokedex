import { useEffect, useState } from "react";
import { useCasesPokemons } from "../../../domain/useCases";
import { pokemonsDataService } from "../../../data/dataServices";
import { PokemonCompleteDataEntity } from "../../../domain/entities";
import { PokemonCompleteModel } from "../../../data/models";
import { usePromises } from "../../hooks";

export function usePokemonViewModel(id: number) {
  const { getPokemonData } = useCasesPokemons(pokemonsDataService());
  const { promiseInProgressArea: promiseGetPokemonsPromise } =
    usePromises("getPokemonsPromise");

  const [pokemon, setPokemon] = useState<PokemonCompleteDataEntity>();

  function handlePokemonDataSuccess(pokemonData: PokemonCompleteModel) {
    const pokemonCompleteDateFormatted = {
      id: pokemonData.id,
      name: pokemonData.name,
      types: pokemonData.types,
      order: pokemonData.order,
      moves: pokemonData.moves,
      image: pokemonData.sprites.other["official-artwork"].front_default,
      weight: pokemonData.weight,
      height: pokemonData.height,
      flavorTextEntries: pokemonData.flavor_text_entries,
      stats: pokemonData.stats,
    };

    setPokemon(pokemonCompleteDateFormatted);
  }

  useEffect(() => {
    id && getPokemonData({ id, onSuccess: handlePokemonDataSuccess });
  }, [id]);

  return { pokemon };
}
