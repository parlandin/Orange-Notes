import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import S from "./note.style";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { BiCommentEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import api from "../../../../api";
import Loading from "../../../../components/Loading";
import MessageModal from "../../../../components/MessageModal";

const Note = () => {
  const { id } = useParams();
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate(-1, { replace: true });
  };

  const [authUser] = useAuth();
  const { user, token } = authUser;

  const getNote = async () => {
    const response = await api.get(`/notes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }

    return response.data;
  };

  const handleEditNote = () => {
    navigate(`/notes/edit/${id}`, { replace: false });
  };

  const deleteNote = async () => {
    setDeleteIsLoading(true);
    try {
      const response = await api.delete(`/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status == 200) {
        setIsSucess(true);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
    setDeleteIsLoading(false);
  };

  const {
    data,
    isError: queryIsError,
    isLoading,
  } = useQuery(["note"], getNote, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isSucess)
    return (
      <MessageModal
        type="sucess"
        message="Anotação excluida com sucesso"
        onClick={() => navigate("/notes", { replace: true })}
      />
    );

  if (isError)
    return (
      <MessageModal
        type="error"
        message="Ocorreu um erro ao deletar anotação, tente novamente"
        onClick={() => setIsError(false)}
      />
    );

  if (queryIsError) {
    return (
      <MessageModal
        type="error"
        message="Ocorreu um erro ao carregar anotação"
        onClick={() => navigate("/notes", { replace: true })}
      />
    );
  }

  if (isLoading || deleteIsLoading) return <Loading />;

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
            onClick={handleEditNote}
            margin="0 15px 0px 0px"
          />

          <ButtonWithIcon
            icon={<BsTrash size="100%" />}
            padding="2px 6px"
            label="Excluir"
            backgroudFill={true}
            reverse={false}
            onClick={deleteNote}
          />
        </S.Header>
      </S.ContainerFixed>

      <S.Title>{data.title}</S.Title>
      <S.Content>{data.content}</S.Content>
    </S.Container>
  );
};

export default Note;
