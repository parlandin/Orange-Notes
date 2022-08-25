import React from "react";
import S from "./loginForm.style";
import InputLabel from "../InputLabel";
import { FiLock, FiMail } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default LoginForm;
