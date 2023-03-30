import {
  pokemonData,
  pokemonDataByUrl,
  pokemonsFiltered,
  PokemonsService,
} from "../../services";

export function useCasesPokemons(service: PokemonsService) {
  return {
    getPokemons({ limit, offset, onSuccess, onError }: pokemonsFiltered) {
      return service.getPokemons({ limit, offset, onSuccess, onError });
    },
    getPokemonDataByUrl({ url, onSuccess, onError }: pokemonDataByUrl) {
      return service.getPokemonDataByUrl({ url, onSuccess, onError });
    },
    getPokemonData({ id, onSuccess, onError }: pokemonData) {
      return service.getPokemonData({ id, onSuccess, onError });
    },
  };
}
