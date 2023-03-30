import { Image } from "react-native";
import { PokemonEntity } from "../../../domain/entities";
import {
  StyledCard,
  StyledId,
  StyledInnerContainerCard,
  StyledName,
} from "./PokemonCard.styles";

interface PokemonCardProps {
  pokemon: PokemonEntity;
  navigateToPokemon: (id: number) => void;
}

export function PokemonCard({ pokemon, navigateToPokemon }: PokemonCardProps) {
  return (
    <StyledCard onPress={() => navigateToPokemon(pokemon.id)}>
      <StyledInnerContainerCard>
        <Image
          source={{ uri: pokemon.image }}
          style={{ height: 92, width: 92 }}
        />
        <StyledName>{pokemon.name}</StyledName>
        <StyledId>#{`${pokemon.id}`.padStart(3, "0")}</StyledId>
      </StyledInnerContainerCard>
    </StyledCard>
  );
}
