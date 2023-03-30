import { Text, ViewProps } from "react-native";
import { PokemonTypeColorsEntity } from "../../../domain/entities";
import { StyledBadgeText, StyledBadgeType } from "./BadgeType.styles";

interface BadgeTypeProps extends ViewProps {
  backgroundColorType: PokemonTypeColorsEntity;
}

export function BadgeType({ backgroundColorType }: BadgeTypeProps) {
  return (
    <StyledBadgeType backgroundColorType={backgroundColorType}>
      <StyledBadgeText>{backgroundColorType.name}</StyledBadgeText>
    </StyledBadgeType>
  );
}
