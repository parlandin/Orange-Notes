import React from "react";
import S from "./inputLabel.style";

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
  return (
    <S.Label>
      {label && <S.LabelText>{label}</S.LabelText>}
      <S.InputWrapper borderRadius={borderRadius}>
        {icon ? icon : ""}
        <S.Input
          {...register(name)}
          name={name}
          placeholder={placeholder}
          type={type}
          onFocus={onFocus}
        />
      </S.InputWrapper>
    </S.Label>
  );
};

export default InputLabel;
