import React, { useState } from "react";
import S from "./configPage.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import MessageModal from "../../../components/MessageModal";

const ConfigPage = () => {
  const navigate = useNavigate();

  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const handleOnClickBack = () => {
    navigate(-1, { replace: true });
  };

  const [authUser] = useAuth();
  const { user, token } = authUser;

  useDocumentTitle(
    user ? `${user.name} | Orange-notes` : "Perfil | Orange-notes"
  );

  const requestUserInfo = async () => {
    const response = await api.get(`/user/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  };

  const {
    data,
    isError: queryIsError,
    isLoading,
  } = useQuery(["userInfo"], requestUserInfo, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const deleteNote = async () => {
    setDeleteIsLoading(true);
    try {
      const response = await api.delete(`/user/${user.id}`, {
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

  /*  const handleDeleteOnClick = () => {
    deleteNote()
  } */

  if (isLoading) return <Loading />;

  if (isSucess) {
    return (
      <MessageModal
        type="sucess"
        message="Sua conta foi excluida com sucesso"
        onClick={() => navigate("/logout", { replace: true })}
      />
    );
  }

  if (isError) {
    return (
      <MessageModal
        type="sucess"
        message="Ocorreu um erro ao excluir conta"
        onClick={() => isError(false)}
      />
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Perfil</S.Title>
        <ButtonWithIcon
          icon={<TiArrowBack size="100%" />}
          padding="2px 4px"
          label="Voltar"
          backgroudFill={true}
          reverse={true}
          onClick={handleOnClickBack}
          margin="0 15px 0px 0px"
        />
      </S.Header>

      <S.WrapperInfo>
        <S.WrapperPicture>
          <img src={data.picture} alt="foto de perfil do usuario" />
        </S.WrapperPicture>
        <S.WrapperUser>
          <S.field>
            <S.Span>Nome: </S.Span>
            {data.name}
          </S.field>

          <S.field>
            <S.Span>E-mail: </S.Span> {data.email}
          </S.field>

          <S.field>
            <S.Span>Criado em: </S.Span>
            {new Date(data.created_at).toLocaleDateString()}
          </S.field>
        </S.WrapperUser>

        <S.WrapperButton>
          <ButtonWithIcon
            icon={<BsTrash size="100%" />}
            padding="2px 4px"
            label="Excluir conta"
            backgroudFill={true}
            reverse={false}
            onClick={deleteNote}
          />
        </S.WrapperButton>
      </S.WrapperInfo>
      <S.Warnig>
        Essa página é destinada a edição do perfil, funcionalidade que chegará
        em breve
      </S.Warnig>
    </S.Container>
  );
};

export default ConfigPage;
