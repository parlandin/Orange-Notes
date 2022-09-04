import React, { useEffect } from "react";
import S from "./coursesModal";
import ButtonWithIcon from "../ButtonWithIcon";
import { MdOutlineHighlightOff } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import InputLabel from "../InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../api";
import { useQueryClient, useMutation } from "react-query";
import useAuth from "../../hooks/useAuth";
import scheme from "./validation";

const CoursesFormModal = ({
  cancelOnClick,
  isOpen,
  current,
  setIsOpenModal,
}) => {
  const [authUser] = useAuth();
  const { user, token } = authUser;

  //cache
  const queryClient = useQueryClient();
  const cache = queryClient
    .getQueryData("courses")
    ?.find((d) => d.course_id === current);
  console.log(cache);

  /*  const UpdateCourse = async(current) => {
    const response
  } */

  /* const CoursesMutation = useMutation({
    mutationFn: 
  }) */

  //validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(scheme),
  });

  //fetch
  const onSubmit = async (input) => {
    console.log(input);
    const data = { ...input, user_id: user.id };
    const response = await api.post("/courses/newcourse", data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status == 201) {
      return setIsOpenModal(false);
    }
  };

  //values for update
  useEffect(() => {
    if (current != "new" && cache) {
      setValue("title", cache.title);
      setValue("url", cache.url);
      setValue("image_url", cache.image_url);
      setValue("category", cache.category);
    }
  }, []);

  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.Title>Informações do curso</S.Title>
        <S.Span>{current == "new" ? "Novo curso" : "Editar curso"}</S.Span>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperGeneric>
            <InputLabel
              name="title"
              register={register}
              type="text"
              placeholder="Digite o Titulo do curso"
              borderRadius="6px"
            />
            <S.Warning>{errors.title?.message}</S.Warning>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="url"
              register={register}
              type="text"
              placeholder="Digite a URL do curso"
              borderRadius="6px"
            />
            <S.Warning>{errors.url?.message}</S.Warning>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="image_url"
              register={register}
              type="text"
              placeholder="Digite o LINK(URL) da imagem do curso"
              borderRadius="6px"
            />
            <S.Warning>{errors.image_url?.message}</S.Warning>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="category"
              register={register}
              type="text"
              placeholder="Informe a categoria do curso"
              borderRadius="6px"
            />
            <S.Warning>{errors.category?.message}</S.Warning>
          </S.WrapperGeneric>

          <S.WrapperButton>
            <ButtonWithIcon
              type="reset"
              backgroudFill={true}
              label="Cancelar"
              icon={<MdOutlineHighlightOff size="100%" />}
              onClick={cancelOnClick}
            />

            <ButtonWithIcon
              type="submit"
              backgroudFill={true}
              label="Salvar"
              icon={<IoIosSave size="100%" />}
            />
          </S.WrapperButton>
        </S.Form>
      </S.Container>

      <S.CloseModal isOpen={isOpen} onClick={cancelOnClick}></S.CloseModal>
    </>
  );
};

export default CoursesFormModal;
