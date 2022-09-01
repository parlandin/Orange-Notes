import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./editNote";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { IoIosSave } from "react-icons/io";
import Loading from "../../../../components/Loading";
import api from "../../../../api";
import useAuth from "../../../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../NewNote/validation";
import { useQueryClient, useQuery } from "react-query";

const EditNote = () => {
  //TODO: refazer essa tela separando responsabilidades
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputForm, setInputForm] = useState({
    titleColor: "#1e1e1e",
    contentColor: "#1e1e1e",
    boxColor: "#fff",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [authUser] = useAuth();

  const { user, token } = authUser;

  //Cache
  const queryClient = useQueryClient();
  const cache = queryClient.getQueryData("note");

  console.log(cache);

  const getNote = async () => {
    const response = await api.get(`/notes/${user.id}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }

    return response.data;
  };

  const {
    data,
    isError,
    isLoading: QueryIsLoading,
  } = useQuery([`note-${id}`], getNote, {
    initialData: cache,
    refetchOnWindowFocus: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      const { title_color, box_color, content_color } = data;
      setInputForm({
        titleColor: title_color,
        contentColor: content_color,
        boxColor: box_color,
      });
      setValue("title", data.title);
      setValue("content", data.content);
    }
  }, [data]);

  const handleOnClickBack = () => {
    navigate("/notes", { replace: false });
  };

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
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    return setIsLoading(false);
  };

  if (isLoading || QueryIsLoading) return <Loading />;

  return (
    <S.Container>
      <S.ContainerFixed>
        <S.Header>
          <S.Title>Editar anotação</S.Title>

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

        <S.TitleInput
          boxColor={inputForm.boxColor}
          titleColor={inputForm.titleColor}
          type="text"
          name="title"
          {...register("title", { required: true })}
          placeholder="Digite o titulo aqui"
        />
        <S.WarningErr>{errors.title?.message}</S.WarningErr>

        <S.ContentInput
          contentColor={inputForm.contentColor}
          boxColor={inputForm.boxColor}
          placeholder="Digite o conteudo"
          name="content"
          {...register("content")}
        ></S.ContentInput>
        <S.WarningErr>{errors.content?.message}</S.WarningErr>

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

export default EditNote;
