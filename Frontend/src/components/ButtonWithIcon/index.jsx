import React from "react";
import S from "./buttonIcon.styel";

const ButtonWithIcon = ({
  icon,
  label,
  onClick,
  padding,
  color,
  reverse,
  backgroudFill,
  margin,
}) => {
  return (
    <S.Button
      onClick={onClick}
      padding={padding}
      color={color}
      reverse={reverse}
      backgroudFill={backgroudFill}
      margin={margin}
    >
      <span>{label}</span>
      <S.Icon>{icon}</S.Icon>
    </S.Button>
  );
};

export default ButtonWithIcon;
