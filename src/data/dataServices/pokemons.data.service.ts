import { trackPromise } from "react-promise-tracker";
import { PokemonsService } from "../../domain/services";
import { Endpoints } from "../endpoints";
import { httpService } from "../http";
import { PokemonModel, PokemonsModel } from "../models";

interface PokemonsResponse {
  data: PokemonsModel;
}

interface PokemonDataResponse {
  data: PokemonModel;
}

export function pokemonsDataService(): PokemonsService {
  const { get } = httpService();
  return {
    async getPokemons({ limit = 20, offset = 0, onSuccess, onError }) {
      try {
        const response: PokemonsResponse = await trackPromise(
          get(Endpoints.pokemon, {
            limit,
            offset,
          }),
          "getPokemonsPromise"
        );
        if (onSuccess)
          onSuccess({
            pokemonsData: response.data.results,
            filter: { limit, offset },
          });
      } catch (e) {
        if (onError) onError(e);
      }
    },
    async getPokemonData({ url, onSuccess, onError }) {
      try {
        const response: PokemonDataResponse = await get(url);
        if (onSuccess) onSuccess(response.data);
        return response.data;
      } catch (e) {
        if (onError) onError(e);
      }
    },
  };
}
