import { PokemonFlavorTextEntity } from "./pokemonFlavorText.entity";
import { PokemonMoveEntity } from "./pokemonMove.entity";
import { PokemonStatEntity } from "./pokemonStat.entity";
import { PokemonTypeEntity } from "./pokemonType.entity";

export interface PokemonCompleteDataEntity {
  id: number;
  name: string;
  types: Array<PokemonTypeEntity>;
  moves: Array<PokemonMoveEntity>;
  stats: Array<PokemonStatEntity>;
  flavorTextEntries: Array<PokemonFlavorTextEntity>;
  order: number;
  image: string;
  weight: number;
  height: number;
}
