import {
  PokemonSpritesEntity,
  PokemonTypeEntity,
  PokemonUrlEntity,
} from "../../domain/entities";

export interface PokemonsModel {
  results: Array<PokemonUrlEntity>;
}

export interface PokemonModel {
  id: number;
  name: string;
  types: Array<PokemonTypeEntity>;
  order: number;
  sprites: PokemonSpritesEntity;
}
