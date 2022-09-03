import * as yup from "yup";

const notesSchema: yup.AnyObjectSchema = yup.object({
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
  title_color: yup.string().max(10).required(),
  content_color: yup.string().max(10).required(),
  box_color: yup.string().max(10).required(),
});

export default notesSchema;
