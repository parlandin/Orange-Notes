import React from "react";
import S from "./inputLabel.style";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputLabel = ({
  icon,
  name,
  placeholder,
  type,
  register,
  onFocus,
  borderRadius,
  label,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <S.Label>
      {label && <S.LabelText>{label}</S.LabelText>}
      <S.InputWrapper borderRadius={borderRadius}>
        {icon ? icon : ""}
        <S.Input
          {...register(name)}
          name={name}
          placeholder={placeholder}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          onFocus={onFocus}
        />
        {type === "password" && (
          <S.ButtonEye onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </S.ButtonEye>
        )}
      </S.InputWrapper>
    </S.Label>
  );
};

export default InputLabel;
