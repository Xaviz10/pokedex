import { TextInputProps } from "react-native";
import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  useController,
} from "react-hook-form";
import { StyledInput, StyledLabel, StyledErrorText } from "./TextField.styles";

export interface InputProps extends TextInputProps {
  id: string;
  name: string;
  label?: string;
  hasError?: boolean;
  errorText?:
    | string
    | FieldError
    | Partial<{ type: string | number; message: string }>
    | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  defaultValue?: string;

  control: Control<FieldValues, any>;
}

export const TextField = (props: InputProps) => {
  const {
    id,
    name,
    label,
    hasError,
    errorText,
    placeholder,
    defaultValue = "",
    control,
    secureTextEntry,
    autoCapitalize,
  } = props;

  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    defaultValue: defaultValue,
  });
  return (
    <>
      {!!label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        id={id}
        name={name}
        hasError={hasError}
        placeholder={placeholder}
        onChangeText={(value) => onChange(value)}
        value={value}
        ref={ref}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
      {!!hasError && !!errorText && (
        <StyledErrorText>{errorText as string}</StyledErrorText>
      )}
    </>
  );
};
