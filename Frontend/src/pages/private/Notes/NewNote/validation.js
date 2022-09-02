import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(100, "Tamanho maximo: 100")
      .required("Esse campo é obrigatório"),
    content: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(2000, "Tamanho maximo: 2000")
      .required("Esse campo é obrigatório"),
  })
  .required();

export default schema;
