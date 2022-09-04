import React, { useEffect, useState } from "react";
import S from "./coursesModal";
import ButtonWithIcon from "../ButtonWithIcon";
import { MdOutlineHighlightOff } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import InputLabel from "../InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../api";
import { useQueryClient, useMutation } from "react-query";
import useAuth from "../../hooks/useAuth";
import scheme from "./validation";
import OptionModal from "../OptionModal";

const CoursesFormModal = ({
  cancelOnClick,
  isOpen,
  currentId,
  setIsOpenModal,
}) => {
  //TODO: Separar responsabilidades
  const [optionModalIsOpen, setOptionModalIsOpen] = useState(false);
  const [authUser] = useAuth();
  const { user, token } = authUser;

  //cache
  const queryClient = useQueryClient();
  const cache = queryClient
    .getQueryData("courses")
    ?.find((d) => d.course_id === currentId);

  const UpdateCourse = async (data) => {
    const response = await api.put(`courses/update/${currentId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response == 200) {
      return response.data;
    }
  };

  //mumation para atualizar cache ao atualizar
  const CoursesMutation = useMutation({
    mutationFn: UpdateCourse,
    onMutate: async (data) => {
      await queryClient.cancelQueries("courses");
      const previousState = queryClient.getQueryData("courses");
      const optimiticity = cache;

      queryClient.setQueryData("courses", (currentCourses) => {
        const filterResult = currentCourses.filter(
          (course) => course.course_id !== optimiticity.course_id
        );
        return [optimiticity, ...filterResult];
      });

      return previousState;
    },
    onError: (err, data, previousState) => {
      queryClient.setQueryData("courses", previousState);
    },

    onSettled: () => {
      queryClient.invalidateQueries("courses");
    },
    onSuccess: () => {
      return setIsOpenModal(false);
    },
  });

  //validações
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(scheme),
  });

  //fetch create new
  const onSubmit = async (input) => {
    const data = { ...input, user_id: user.id };
    const response = await api.post("/courses/newcourse", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  //mumation para atualizar cache no submit
  const newCourseMutation = useMutation({
    mutationFn: onSubmit,
    onMutate: async (data) => {
      await queryClient.cancelQueries("courses");
      const previousState = queryClient.getQueryData("courses");
      const optimiticity = data;

      queryClient.setQueryData("courses", (currentCourses) => {
        return [optimiticity, ...currentCourses];
      });

      return previousState;
    },
    onError: (err, data, previousState) => {
      queryClient.setQueryData("courses", previousState);
    },

    onSettled: async () => {
      await queryClient.invalidateQueries("courses");
    },
    onSuccess: () => {
      return setIsOpenModal(false);
    },
  });

  //fetch para deletar curso
  const deleteCourse = async () => {
    const response = await api.delete(`/courses/delete/${currentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status !== 200) {
      throw Error("Ocorreu um erro ao excluir curso");
    }
  };

  //mumation para atualizar cache ao deletar curso
  const onDeleteMutation = useMutation({
    mutationFn: deleteCourse,
    onMutate: async () => {
      await queryClient.cancelQueries("courses");
      const previousState = queryClient.getQueryData("courses");
      return previousState;
    },
    onError: (err, data, previousState) => {
      queryClient.setQueryData("courses", previousState);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries("courses");
    },
    onSuccess: () => {
      setOptionModalIsOpen(false);
      return setIsOpenModal(false);
    },
  });

  //valores padrão para update
  useEffect(() => {
    if (currentId != "new" && cache) {
      setValue("title", cache.title);
      setValue("url", cache.url);
      setValue("image_url", cache.image_url);
      setValue("category", cache.category);
    }
  }, []);

  return (
    <>
      {optionModalIsOpen ? (
        <OptionModal
          isOpen={optionModalIsOpen}
          message="Você tem certeza que deseja excluir esse curso?"
          cancelOnClick={() => setOptionModalIsOpen(false)}
          confirmOnClick={onDeleteMutation.mutate}
        />
      ) : (
        <>
          <S.Container isOpen={isOpen}>
            <S.Title>Informações do curso</S.Title>
            <S.Span>
              {currentId == "new" ? "Novo curso" : "Editar curso"}
            </S.Span>
            <S.Form
              onSubmit={
                currentId == "new"
                  ? handleSubmit(newCourseMutation.mutate)
                  : handleSubmit(CoursesMutation.mutate)
              }
            >
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

                {currentId != "new" && (
                  <ButtonWithIcon
                    type="reset"
                    backgroudFill={true}
                    label="Excluir"
                    icon={<BsTrash size="100%" />}
                    onClick={() => setOptionModalIsOpen(true)}
                  />
                )}

                <ButtonWithIcon
                  type="submit"
                  backgroudFill={true}
                  label={currentId == "new" ? "Salvar" : "Atualizar"}
                  icon={<IoIosSave size="100%" />}
                />
              </S.WrapperButton>
            </S.Form>
          </S.Container>

          <S.CloseModal isOpen={isOpen} onClick={cancelOnClick}></S.CloseModal>
        </>
      )}
    </>
  );
};

export default CoursesFormModal;
