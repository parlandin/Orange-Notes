import React from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import InputLabel from "../InputLabel";
import S from "./account.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation";

const AccountForm = () => {
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

      <S.LinkWithStyle to="/login">
        Já tem uma conta? Entre agora
      </S.LinkWithStyle>
    </S.Form>
  );
};

export default AccountForm;
