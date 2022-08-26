import React, { useState } from "react";
import S from "./loginForm.style";
import InputLabel from "../InputLabel";
import { FiLock, FiMail } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation";
import api from "../../api";
import Loading from "../Loading";

const LoginForm = () => {
  const [isError, setISError] = useState({
    error: false,
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
      const response = await api.post("/auth", data);
      console.log(response.data);

      setIsLoading(false);
    } catch (err) {
      if (err.response.data?.error) {
        setISError({ error: true, message: err.response.data?.error });
      }
      setIsLoading(false);
      console.log("error: ", err);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {isError.error && <S.SpanErr>{isError.message}</S.SpanErr>}
          <S.WrapperGeneric>
            <InputLabel
              icon={<FiMail size="1.6rem" color="1E1E1E" />}
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
            />
            <S.Span>{errors.email?.message}</S.Span>
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

          <S.Button>Entar</S.Button>

          <S.LinkWithStyle to="/newaccount">
            Não tem uma conta? Criar agora
          </S.LinkWithStyle>
        </S.Form>
      )}
    </>
  );
};

export default LoginForm;
