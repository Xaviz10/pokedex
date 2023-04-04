import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSignUpSchema } from "../../validators";
import { useAuth } from "../../hooks";

export function useAccountViewModel() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(userSignUpSchema) });

  const { auth, handleLogin, handleLogout } = useAuth();

  // on submit signup
  const onSubmit = (data: FieldValues) => {
    const userData = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    handleLogin(userData);
  };
  return {
    auth,
    handleLogout,

    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}
