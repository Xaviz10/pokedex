export interface PokemonSpritesEntity {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: {
    "official-artwork": { front_default: string };
  };
}
