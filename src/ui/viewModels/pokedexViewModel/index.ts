import { useCasesPokemons } from "../../../domain/useCases";
import { pokemonsDataService } from "../../../data/dataServices";
import { useEffect, useState } from "react";
import { PokemonEntity, PokemonUrlEntity } from "../../../domain/entities";
import { usePromises } from "../../hooks";

interface PokemonDataSuccessProps {
  pokemonsData: Array<PokemonUrlEntity>;
  filter: { limit: number; offset: number };
}

export function usePokedexViewModel() {
  const { getPokemons, getPokemonData } = useCasesPokemons(
    pokemonsDataService()
  );
  const { promiseInProgressArea: promiseGetPokemonsPromise } =
    usePromises("getPokemonsPromise");

  const [pokemons, setPokemons] = useState<Array<PokemonEntity>>([]);
  const [filter, setFilter] = useState({ limit: 20, offset: 0 });

  async function handlePokemonsSuccess(data: PokemonDataSuccessProps) {
    const { pokemonsData, filter } = data;
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
            image: pokemonData.sprites.other["official-artwork"].front_default,
          });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      setFilter(filter);
    } catch (error) {
      throw error;
    }
  }

  function handleGetNewPokemons() {
    const newOffset = filter.offset + 20;
    if (!promiseGetPokemonsPromise) {
      getPokemons({
        ...filter,
        offset: newOffset,
        onSuccess: handlePokemonsSuccess,
      });
    }
  }

  useEffect(() => {
    getPokemons({ ...filter, onSuccess: handlePokemonsSuccess });
  }, []);

  return { pokemons, handleGetNewPokemons };
}
