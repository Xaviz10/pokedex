import { Button, TextField } from "../../components";
import { useAccountViewModel } from "../../viewModels";
import { StyledSignUpScreen } from "./AccountScreen.styles";

export function AccountScreen() {
  const { control, errors, handleSubmit, onSubmit } = useAccountViewModel();
  return (
    <StyledSignUpScreen>
      <TextField
        id={"name"}
        name={"name"}
        label={"Name"}
        placeholder={"Name"}
        control={control}
        hasError={!!errors?.name}
        errorText={errors?.name?.message}
      />

      <TextField
        id={"lastName"}
        name={"lastName"}
        label={"Last name"}
        placeholder={"Last name"}
        control={control}
        hasError={!!errors?.lastName}
        errorText={errors?.lastName?.message}
      />

      <TextField
        id={"email"}
        name={"email"}
        label={"Email"}
        placeholder={"Email"}
        control={control}
        hasError={!!errors?.email}
        errorText={errors?.email?.message}
        autoCapitalize={"none"}
      />

      <TextField
        secureTextEntry={true}
        id={"password"}
        name={"password"}
        label={"Password"}
        placeholder={"Password"}
        control={control}
        hasError={!!errors?.password}
        errorText={errors?.password?.message}
        autoCapitalize={"none"}
      />
      <Button onPress={handleSubmit(onSubmit)} title={"Enviar"} />
    </StyledSignUpScreen>
  );
}
