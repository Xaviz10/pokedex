import {
  PokemonFlavorTextEntity,
  PokemonMoveEntity,
  PokemonSpritesEntity,
  PokemonStatEntity,
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

export interface PokemonCompleteModel {
  id: number;
  name: string;
  types: Array<PokemonTypeEntity>;
  moves: Array<PokemonMoveEntity>;
  stats: Array<PokemonStatEntity>;
  order: number;
  sprites: PokemonSpritesEntity;
  weight: number;
  height: number;
  flavor_text_entries: Array<PokemonFlavorTextEntity>;
}
