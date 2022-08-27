import React, { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import InputLabel from "../InputLabel";
import S from "./account.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation";
import Loading from "../Loading";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AccountForm = () => {
  const navigate = useNavigate();

  const [isError, setISError] = useState({
    error: false,
    isInEmail: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/create", data);
      //console.log(response.data);

      return navigate("/sucesscreateAccount");
    } catch (err) {
      if (err.response.status == 400) {
        setISError({
          ...isError,
          error: true,
          isInEmail: true,
          message: err.response.data?.error,
        });
        return setIsLoading(false);
      }

      setISError({
        ...isError,
        error: true,
        isInEmail: false,
        message: err.response.data?.error,
      });
      return setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperGeneric>
            <InputLabel
              icon={<FiUser size="1.6rem" color="1E1E1E" />}
              type="text"
              placeholder="Nome"
              name="name"
              register={register}
            />
            <S.Span>{errors.name?.message}</S.Span>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              icon={<FiMail size="1.6rem" color="1E1E1E" />}
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
              onFocus={() => setISError({ ...isError, error: false })}
            />
            <S.Span>{errors.email?.message}</S.Span>
            {isError.error && isError.isInEmail && (
              <S.Span className="email">{isError?.message}</S.Span>
            )}
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              icon={<FiLock size="1.6rem" color="1E1E1E" />}
              type="password"
              placeholder="Senha"
              name="password"
              register={register}
            />
            <S.Span>{errors.password?.message}</S.Span>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              icon={<FiLock size="1.6rem" color="1E1E1E" />}
              type="password"
              placeholder="Confirmar senha"
              name="confirmpassword"
              register={register}
            />
            <S.Span>{errors.confirmpassword?.message}</S.Span>
          </S.WrapperGeneric>

          <S.Button>Confirmar</S.Button>

          {isError.error && !isError.isInEmail && (
            <S.SpanErr>{isError.message}</S.SpanErr>
          )}

          <S.LinkWithStyle to="/login">
            Já tem uma conta? Entre agora
          </S.LinkWithStyle>
        </S.Form>
      )}
    </>
  );
};

export default AccountForm;
