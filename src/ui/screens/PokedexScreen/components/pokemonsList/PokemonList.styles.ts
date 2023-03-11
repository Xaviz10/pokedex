import { FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { PokemonEntity } from "../../../../../domain/entities";

export const stylesFlatList = StyleSheet.create({
  container: {
    width: "100%",
    padding: 2,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
});

export const StyledFlatList = styled.FlatList.attrs({
  className: "StyledFlatList",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2;
`;
