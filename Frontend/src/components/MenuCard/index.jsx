import React from "react";
import S from "./menuCard.style";

const MenuCard = ({ icon, title, description, path }) => {
  return (
    <S.MenuCard to={path}>
      <div className="header">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </S.MenuCard>
  );
};

export default MenuCard;
