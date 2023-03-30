import { PressableProps } from "react-native";
import { StyledButton, StyledButtonTitle } from "./Button.styles";

interface ButtonProps extends PressableProps {
  title: string;
}

export function Button(props: ButtonProps) {
  const { onPress, title } = props;
  return (
    <StyledButton onPress={onPress}>
      <StyledButtonTitle>{title}</StyledButtonTitle>
    </StyledButton>
  );
}
