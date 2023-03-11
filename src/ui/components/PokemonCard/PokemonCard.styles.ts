import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const stylesFlatList = StyleSheet.create({
  container: {
    padding: 2,
  },
});

export const StyledCard = styled.View.attrs({
  className: "StyledCard",
})`
  height: 180px;
  width: 100%;
`;
