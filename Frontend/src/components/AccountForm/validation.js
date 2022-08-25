import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .min(4, "O nome deve ter no mínimo 4 caracteres")
      .max(30, "O nome deve ter no máximo 30 caracteres")
      .required(),

    email: yup
      .string()
      .email("Informe um e-mail valido")
      .required("Esse campo é obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(30, "Tamanho maximo da senha: 30")
      .required("Esse campo é obrigatório"),

    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais")
      .required("Esse campo é obrigatório"),
  })
  .required();

export default schema;
