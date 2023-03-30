import { PokemonTypeColorsEntity } from "./pokemonTypeColors.entity";

export interface PokemonTypeEntity {
  slot: number;
  type: PokemonTypeColorsEntity;
}
