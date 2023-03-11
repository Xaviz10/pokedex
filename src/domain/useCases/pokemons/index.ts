import { pokemonData, pokemonsFiltered, PokemonsService } from "../../services";

export function useCasesPokemons(service: PokemonsService) {
  return {
    getPokemons({ limit, offset, onSuccess, onError }: pokemonsFiltered) {
      return service.getPokemons({ limit, offset, onSuccess, onError });
    },
    getPokemonData({ url, onSuccess, onError }: pokemonData) {
      return service.getPokemonData({ url, onSuccess, onError });
    },
  };
}
