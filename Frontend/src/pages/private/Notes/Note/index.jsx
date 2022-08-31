import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import S from "./note.style";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { BiCommentEdit } from "react-icons/bi";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import api from "../../../../api";
import Loading from "../../../../components/Loading";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate(-1, { replace: true });
  };

  const [authUser] = useAuth();
  const { token } = authUser;

  const getNote = async () => {
    const response = await api.get(`/notes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }

    return response.data;
  };

  const { data, isError, isLoading } = useQuery(["note"], getNote, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.ContainerFixed>
        <S.Header>
          <ButtonWithIcon
            icon={<TiArrowBack size="100%" />}
            padding="2px 4px"
            label="Voltar"
            backgroudFill={true}
            reverse={true}
            onClick={handleOnClickBack}
            margin="0 15px 0px 0px"
          />

          <ButtonWithIcon
            icon={<BiCommentEdit size="100%" />}
            padding="2px 6px"
            label="Editar"
            backgroudFill={true}
            reverse={false}
            onClick={handleOnClickBack}
          />
        </S.Header>
      </S.ContainerFixed>

      <S.Title>{data.title}</S.Title>
      <S.Content>{data.content}</S.Content>
    </S.Container>
  );
};

export default Note;
