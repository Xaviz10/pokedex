import { useCasesPokemons } from "../../../domain/useCases";
import { pokemonsDataService } from "../../../data/dataServices";
import { useEffect, useState } from "react";
import { PokemonEntity, PokemonUrlEntity } from "../../../domain/entities";

export function usePokedexViewModel() {
  const { getPokemons, getPokemonData } = useCasesPokemons(
    pokemonsDataService()
  );

  const [pokemons, setPokemons] = useState<Array<PokemonEntity>>([]);

  async function handlePokemonsSuccess(pokemonsData: Array<PokemonUrlEntity>) {
    let pokemonsArray: Array<PokemonEntity> = [];
    try {
      for await (const currentPokemon of pokemonsData) {
        const pokemonData = await getPokemonData({ url: currentPokemon.url });
        pokemonData &&
          pokemonsArray.push({
            id: pokemonData.id,
            name: pokemonData.name,
            type: pokemonData.types[0].type,
            order: pokemonData.order,
            image: pokemonData.sprites.front_shiny,
          });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getPokemons({ onSuccess: handlePokemonsSuccess });
  }, []);

  return { pokemons };
}
