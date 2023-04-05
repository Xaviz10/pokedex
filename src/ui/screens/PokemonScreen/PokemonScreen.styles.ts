import { SafeAreaViewProps } from "react-native-safe-area-context";
import { TextProps, ViewProps } from "react-native/types";
import styled from "styled-components/native";
import { PokemonTypeColorsEntity } from "../../../domain/entities";

interface SafeAreaViewNewProps extends SafeAreaViewProps {
  backgroundColorType?: PokemonTypeColorsEntity;
}

interface TitleProps extends TextProps {
  colorType?: PokemonTypeColorsEntity;
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

export const StyledPokemonScreenActivityIndicator = styled.View.attrs({
  className: "StyledPokemonScreenActivityIndicator",
})`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledPokemonScreen = styled.SafeAreaView.attrs({
  className: "StyledPokemonScreen",
})<SafeAreaViewNewProps>`
  height: 100%;
  position: relative;
  display: flex;

  ${({ backgroundColorType }) =>
    backgroundColorType?.name &&
    `background-color: ${PokemonTypeColors[backgroundColorType.name]};
`}
`;

export const StyledContainerLogo = styled.View.attrs({
  className: "StyledContainerLogo",
})`
  position: relative;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  className: "StyledButton",
})`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const StyledName = styled.Text.attrs({
  className: "StyledName",
})`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  text-transform: capitalize;
`;
export const StyledLogo = styled.Image.attrs({
  className: "StyledLogo",
})`
  height: 240px;
  width: 240px;
  opacity: 0.15;
`;
export const StyledId = styled.Text.attrs({
  className: "StyledId",
})`
  transform: translateY(4px);

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const StyledInnerContainer = styled.View.attrs({
  className: "StyledInnerContainer",
})`
  position: relative;
  height: 60%;
  margin: 4px 8px;
  padding: 20px;
  padding-top: 64px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 4px;
  background-color: #ffffff;
  border-radius: 8px;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 1;
`;

export const StyledFavoriteContainer = styled.View.attrs({
  className: "StyledFavoriteContainer",
})`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 16px;
  left: 100%;
  transform: translateX(-8px);
`;

export const StyledTitle = styled.Text.attrs({
  className: "StyledTitle",
})<TitleProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;

  ${({ colorType }) =>
    colorType?.name &&
    `color: ${PokemonTypeColors[colorType.name]};
`}
`;

export const StyledImagePokemon = styled.Image.attrs({
  className: "StyledImagePokemon",
})`
  position: absolute;
  top: -184px;
  height: 250px;
  width: 250px;
`;

export const StyledBadgesTypeContainer = styled.View.attrs({
  className: "StyledBadgesTypeContainer",
})`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledMainCharacteristics = styled.View.attrs({
  className: "StyledMainCharacteristics",
})`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledVerticalLine = styled.View.attrs({
  className: "StyledVerticalLine",
})`
  width: 1px;
  height: 100%;
  margin: 0 24px;
  background-color: #e0e0e0;
`;

export const StyledCharacteristic = styled.View.attrs({
  className: "StyledCharacteristic",
})`
  position: relative;
  min-height: 48px;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCharacteristicValue = styled.View.attrs({
  className: "StyledCharacteristicValue",
})`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const StyledCharacteristicMove = styled.View.attrs({
  className: "StyledCharacteristicMove",
})`
  position: relative;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const StyledCharacteristicText = styled.Text.attrs({
  className: "StyledCharacteristicText",
})`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #1d1d1d;
  text-transform: capitalize;
`;
export const StyledCharacteristicsTitle = styled.Text.attrs({
  className: "StyledCharacteristicsTitle",
})`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #666666;
`;

export const StyledFlavorText = styled.Text.attrs({
  className: "StyledFlavorText",
})`
  width: 100%
  padding: 8px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #1D1D1D;
  text-align: center;
`;

export const StyledStatsContainer = styled.View.attrs({
  className: "StyledStatsContainer",
})`
  position: relative;
  display: flex;
`;

export const StyledStats = styled.View.attrs({
  className: "StyledStats",
})`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledStatsTitle = styled.Text.attrs({
  className: "StyledStatsTitle",
})<TitleProps>`
  width: 34px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  text-align: right;
  ${({ colorType }) =>
    colorType?.name &&
    `color: ${PokemonTypeColors[colorType.name]};
`}
`;
export const StyledStatValue = styled.Text.attrs({
  className: "StyledStatValue",
})`
  padding-right: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #1d1d1d;
  text-transform: capitalize;
`;

export const StyledVerticalLineStats = styled.View.attrs({
  className: "StyledVerticalLineStats",
})`
  width: 1px;
  height: 100%;
  margin: 0 16px;
  background-color: #e0e0e0;
`;
