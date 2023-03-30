import { PokemonUrlEntity } from "./pokemonUrl.entity";

export interface PokemonStatEntity {
  base_stat: number;
  effort: number;
  stat: PokemonUrlEntity;
}
