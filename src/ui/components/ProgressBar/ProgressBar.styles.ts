import styled from "styled-components/native";
import { Bar } from "react-native-progress";

export const StyledProgressBar = styled(Bar).attrs({
  className: "StyledProgressBar",
})`
  height: 4px;
`;
