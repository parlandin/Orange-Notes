import * as yup from "yup";

const authSchema: yup.AnyObjectSchema = yup.object({
  email: yup
    .string()
    .email("Informe um e-mail valido")
    .required("Esse campo é obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .max(30, "Tamanho maximo da senha: 30")
    .required("Esse campo é obrigatório"),
});

export default authSchema;
