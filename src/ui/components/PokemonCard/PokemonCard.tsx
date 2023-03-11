import {
  TouchableWithoutFeedbackComponent,
  Text,
  Image,
  View,
} from "react-native";
import { PokemonEntity } from "../../../domain/entities";
import { StyledCard } from "./PokemonCard.styles";

interface PokemonCardProps {
  pokemon: PokemonEntity;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <View>
      <StyledCard>
        <Image
          source={{ uri: pokemon.image }}
          style={{ height: 120, width: 120 }}
        />
        <Text>{pokemon.name}</Text>
      </StyledCard>
    </View>
  );
}
