import * as yup from "yup";

const coursesSchema: yup.AnyObjectSchema = yup
  .object({
    title: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .max(100, "O tamanho máximo é de 80 caracteres"),
    url: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .max(1000, "O tamanho máximo é de 1000 caracteres"),

    image_url: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .max(1000, "O tamanho máximo é de 1000 caracteres"),

    category: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .max(20, "Máximo de 20 caracteres"),
  })
  .required("esses campos são obrigatorios");

export default coursesSchema;
