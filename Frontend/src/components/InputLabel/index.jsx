import React from "react";
import S from "./inputLabel.style";

const InputLabel = ({ icon, name, placeholder, type, register, onFocus }) => {
  return (
    <S.Label>
      {icon}
      <S.Input
        {...register(name)}
        name={name}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
      />
    </S.Label>
  );
};

export default InputLabel;
