import { PokemonUrlEntity } from "./pokemonUrl.entity";

export interface PokemonEntity {
  id: number;
  name: string;
  type: PokemonUrlEntity;
  order: number;
  image: string;
}
