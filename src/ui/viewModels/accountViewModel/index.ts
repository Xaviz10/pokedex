import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSignUpSchema } from "../../validators";

export function useAccountViewModel() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(userSignUpSchema) });

  // on submit signup
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}
