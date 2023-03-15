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
  // onPress: (event: GestureResponderEvent) => void;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <StyledCard onPress={() => console.log(`Vamos a ${pokemon.name}`)}>
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
