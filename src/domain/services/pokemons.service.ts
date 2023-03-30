import { PokemonModel } from "../../data/models";
import { handleResponse } from "../shared";

export interface pokemonsFiltered extends handleResponse {
  limit?: number;
  offset?: number;
}

export interface pokemonDataByUrl extends handleResponse {
  url: string;
}
export interface pokemonData extends handleResponse {
  id: number;
}
export interface PokemonsService {
  getPokemons({ limit, offset, onSuccess, onError }: pokemonsFiltered): void;
  getPokemonDataByUrl({
    url,
    onSuccess,
    onError,
  }: pokemonDataByUrl): Promise<PokemonModel | undefined>;
  getPokemonData({
    id,
    onSuccess,
    onError,
  }: pokemonData): Promise<PokemonModel | undefined>;
}
