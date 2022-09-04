import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    url: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Esse campo é obrigatório"),
    image: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Esse campo é obrigatório"),
    category: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(20, "Maximo de 20 caractere")
      .required("Esse campo é obrigatório"),
  })
  .required();

export default schema;
