import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    url: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres"),

    image_url: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres"),

    category: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .max(20, "Maximo de 20 caractere"),
  })
  .required();

export default schema;
