import { PokemonModel } from "../../data/models";
import { handleResponse } from "../shared";

export interface pokemonsFiltered extends handleResponse {
  limit?: number;
  offset?: number;
}

export interface pokemonData extends handleResponse {
  url: string;
}

export interface PokemonsService {
  getPokemons({ limit, offset, onSuccess, onError }: pokemonsFiltered): void;
  getPokemonData({
    url,
    onSuccess,
    onError,
  }: pokemonData): Promise<PokemonModel | undefined>;
}
