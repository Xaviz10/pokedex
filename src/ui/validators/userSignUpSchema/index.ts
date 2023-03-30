import * as yup from "yup";
import {
  alphaLetterSchema,
  emailSchema,
  passwordSchema,
} from "../commonSchemas";

export const userSignUpSchema = yup.object({
  name: alphaLetterSchema.required("Debes escribir al menos un nombre"),
  lastName: alphaLetterSchema.required("Debes escribir al menos un Apellido"),
  email: emailSchema.required("Campo requerido"),
  password: passwordSchema,
  // termsAndConditions: yup
  //   .boolean()
  //   .oneOf([true], "Debes aceptar los términos y condiciones")
  //   .required("Campo requerido"),
  // privacyPolicy: yup
  //   .boolean()
  //   .oneOf(
  //     [true],
  //     "Debes aceptar la política de consulta y tratamiento de datos personales"
  //   )
  //   .required("Campo requerido"),
});
