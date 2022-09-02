import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./newNote.style";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { IoIosSave } from "react-icons/io";
import Loading from "../../../../components/Loading";
import api from "../../../../api";
import useAuth from "../../../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation";
import MessageModal from "../../../../components/MessageModal";

const NewNote = () => {
  //TODO: refazer essa tela separando responsabilidades
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    titleColor: "#1e1e1e",
    contentColor: "#1e1e1e",
    boxColor: "#fff",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [authUser] = useAuth();

  const { user, token } = authUser;

  const handleOnClickBack = () => {
    navigate("/notes", { replace: true });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    const data = {
      ...input,
      title_color: inputForm.titleColor,
      content_color: inputForm.contentColor,
      box_color: inputForm.boxColor,
      user_id: user.id,
    };

    setIsLoading(true);

    try {
      const res = await api.post("/notes/newnote", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsSucess(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
    return setIsLoading(false);
  };

  if (isSucess)
    return (
      <MessageModal
        type="sucess"
        message="Anotação criada com sucesso"
        onClick={() => navigate("/notes", { replace: true })}
      />
    );

  if (isError)
    return (
      <MessageModal
        type="error"
        message="Ocorreu um erro ao criar anotação, tente novamente"
        onClick={() => setIsError(false)}
      />
    );

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.ContainerFixed>
        <S.Header>
          <S.Title>Nova anotação</S.Title>

          <ButtonWithIcon
            icon={<TiArrowBack size="100%" />}
            padding="2px 4px"
            label="Voltar"
            backgroudFill={true}
            reverse={true}
            onClick={handleOnClickBack}
            margin="0 15px 0px 10px"
          />
        </S.Header>
      </S.ContainerFixed>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.SectionColor>
          <S.ButtonsColorContainer>
            <S.ColorInput preview={inputForm.titleColor}>
              <span>Cor do titulo</span>
              <input
                type="color"
                value={inputForm.titleColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, titleColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>

            <S.ColorInput preview={inputForm.contentColor}>
              <span>Cor do conteudo</span>
              <input
                type="color"
                value={inputForm.contentColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, contentColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>

            <S.ColorInput preview={inputForm.boxColor}>
              <span>Cor do caixa</span>
              <input
                type="color"
                value={inputForm.boxColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, boxColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>
          </S.ButtonsColorContainer>

          <S.Warning>Obs: Essas cores ficam apenas nos cards</S.Warning>
        </S.SectionColor>

        <S.WrapperInput boxColor={inputForm.boxColor}>
          <S.TitleInput
            titleColor={inputForm.titleColor}
            type="text"
            name="title"
            {...register("title", { required: true })}
            placeholder="Digite o titulo aqui"
          />
          <S.WarningErr>{errors.title?.message}</S.WarningErr>
        </S.WrapperInput>

        <S.WrapperInput boxColor={inputForm.boxColor}>
          <S.ContentInput
            contentColor={inputForm.contentColor}
            placeholder="Digite o conteudo"
            name="content"
            {...register("content")}
          ></S.ContentInput>
          <S.WarningErr>{errors.content?.message}</S.WarningErr>
        </S.WrapperInput>

        <div>
          <ButtonWithIcon
            icon={<IoIosSave size="100%" />}
            padding="2px 4px"
            label="Salvar"
            backgroudFill={true}
            reverse={false}
            margin="10px 0px"
          />
        </div>
      </S.Form>
    </S.Container>
  );
};

export default NewNote;
