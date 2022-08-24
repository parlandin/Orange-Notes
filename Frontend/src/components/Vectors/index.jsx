import React from "react";
import Container from "./vectos.style";
import ReactIcon from "../../assets/images/react.svg";
import StarIcon from "../../assets/images/star.svg";
import AIcon from "../../assets/images/a.svg";
import Book2Icon from "../../assets/images/book-2.svg";
import BookTransIcon from "../../assets/images/book-trans.svg";
import BookIcon from "../../assets/images/book.svg";
import BrainIcon from "../../assets/images/brain.svg";
import DateIcon from "../../assets/images/date.svg";
import EngIcon from "../../assets/images/eng.svg";
import MolecIcon from "../../assets/images/molec.svg";
import ResIcon from "../../assets/images/res.svg";
import RootIcon from "../../assets/images/root.svg";

const Vectors = () => {
  return (
    <Container>
      <img className="react" src={ReactIcon} />
      <img className="star" src={StarIcon} />
      <img className="star1" src={StarIcon} />
      <img className="star2" src={StarIcon} />
      <img className="a" src={AIcon} />
      <img className="a1" src={AIcon} />
      <img className="book2" src={Book2Icon} />
      <img className="booktrans" src={BookTransIcon} />
      <img className="booktrans1" src={BookTransIcon} />
      <img className="brain" src={BrainIcon} />
      <img className="brain1" src={BrainIcon} />
      <img className="date" src={DateIcon} />
      <img className="eng" src={EngIcon} />
      <img className="molec" src={MolecIcon} />
      <img className="res" src={ResIcon} />
      <img className="res1" src={ResIcon} />
      <img className="root" src={RootIcon} />
      <img className="book" src={BookIcon} />
    </Container>
  );
};

export default Vectors;
