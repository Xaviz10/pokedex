import styled from "styled-components/native";
import { Button, ButtonProps, Pressable, PressableProps } from "react-native";

export const StyledButton = styled(Pressable).attrs({
  className: "StyledButton",
})<PressableProps>`
  margin: 8px;
  padding: 14px;
  background-color: #dc0a2d;
  border-radius: 8px;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 3px;
  elevation: 3;
`;

export const StyledButtonTitle = styled.Text.attrs({
  className: "StyledButtonTitle",
})`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;
