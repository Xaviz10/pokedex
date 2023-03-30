import { ViewProps } from "react-native/types";
import styled from "styled-components/native";
import { PokemonTypeColorsEntity } from "../../../domain/entities";

interface BadgeTypeProps extends ViewProps {
  backgroundColorType: PokemonTypeColorsEntity;
}

enum PokemonTypeColors {
  normal = "#A8A77A",
  fire = "#EE8130",
  water = "#6390F0",
  electric = "#F7D02C",
  grass = "#7AC74C",
  ice = "#96D9D6",
  fighting = "#C22E28",
  poison = "#A33EA1",
  ground = "#E2BF65",
  flying = "#A98FF3",
  psychic = "#F95587",
  bug = "#A6B91A",
  rock = "#B6A136",
  ghost = "#735797",
  dragon = "#6F35FC",
  dark = "#705746",
  steel = "#B7B7CE",
  fairy = "#D685AD",
}

export const StyledBadgeType = styled.View.attrs({
  className: "StyledBadgeType",
})<BadgeTypeProps>`
  position: relative;
  display: flex;
  padding: 2px 8px;
  border-radius: 10px;

  ${({ backgroundColorType }) =>
    backgroundColorType?.name &&
    `background-color: ${PokemonTypeColors[backgroundColorType.name]};
  `}
`;

export const StyledBadgeText = styled.Text.attrs({
  className: "StyledBadgeText",
})`
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;

  display: flex;
  align-items: center;
  z-index: 10;

  color: white;
  text-transform: capitalize;
`;
