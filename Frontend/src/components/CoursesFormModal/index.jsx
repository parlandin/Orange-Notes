import React from "react";
import S from "./coursesModal";
import ButtonWithIcon from "../ButtonWithIcon";
import { MdOutlineHighlightOff } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import InputLabel from "../InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../api";

const CoursesFormModal = ({
  confirmOnClick,
  cancelOnClick,
  isOpen,
  current,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.Title>Informações do curso</S.Title>
        <S.Span>{current == "new" ? "Novo curso" : "Editar curso"}</S.Span>
        <S.Form>
          <S.WrapperGeneric>
            <InputLabel
              name="title"
              register={register}
              type="text"
              placeholder="Digite o Titulo do curso"
              borderRadius="6px"
            />
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="url"
              register={register}
              type="text"
              placeholder="Digite a URL do curso"
              borderRadius="6px"
            />
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="image"
              register={register}
              type="text"
              placeholder="Digite o LINK(URL) da imagem do curso"
              borderRadius="6px"
            />
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              name="category"
              register={register}
              type="text"
              placeholder="Informe a categoria do curso"
              borderRadius="6px"
            />
          </S.WrapperGeneric>
        </S.Form>

        <S.WrapperButton>
          <ButtonWithIcon
            backgroudFill={true}
            label="Cancelar"
            icon={<MdOutlineHighlightOff size="100%" />}
            onClick={cancelOnClick}
          />

          <ButtonWithIcon
            backgroudFill={true}
            label="Salvar"
            icon={<IoIosSave size="100%" />}
            onClick={confirmOnClick}
          />
        </S.WrapperButton>
      </S.Container>

      <S.CloseModal isOpen={isOpen} onClick={cancelOnClick}></S.CloseModal>
    </>
  );
};

export default CoursesFormModal;
