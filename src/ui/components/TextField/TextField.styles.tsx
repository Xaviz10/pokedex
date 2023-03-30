import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface StyledInputProps extends TextInputProps {
  id: string;
  name: string;
  hasError?: boolean;
}

interface StyledLabelProps {
  textLabelColor?: string;
}

export const StyledInput = styled.TextInput.attrs({
  className: "StyledInput",
})<StyledInputProps>`
  width: 100%;
  margin: 8px 0px;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 16px;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 3px;
  elevation: 3;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1d1d1d;
  text-align: left;

  ${({ hasError }) => hasError && ``}
`;

export const StyledLabel = styled.Text.attrs({
  className: "StyledLabel",
})`
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1d1d1d;
  text-align: left;
`;

export const StyledErrorText = styled.Text.attrs({
  className: "StyledErrorText",
})`
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #dc0a2d;
  text-align: left;
`;
