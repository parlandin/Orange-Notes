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
      <img className="react" src={ReactIcon} alt="vector icone react" />
      <img className="star" src={StarIcon} alt="vector icone star" />
      <img className="star1" src={StarIcon} alt="vector icone star" />
      <img className="star2" src={StarIcon} alt="vector icone star" />
      <img className="a" src={AIcon} alt="vector icone a" />
      <img className="a1" src={AIcon} alt="vector icone a" />
      <img className="book2" src={Book2Icon} alt="vector icone book" />
      <img className="booktrans" src={BookTransIcon} alt="vector icone book" />
      <img className="booktrans1" src={BookTransIcon} alt="vector icone book" />
      <img className="brain" src={BrainIcon} alt="vector icone brain" />
      <img className="brain1" src={BrainIcon} alt="vector icone brain" />
      <img className="date" src={DateIcon} alt="vector icone date" />
      <img className="eng" src={EngIcon} alt="vector icone gear" />
      <img className="molec" src={MolecIcon} alt="vector icone molecule" />
      <img className="res" src={ResIcon} alt="vector icone res" />
      <img className="res1" src={ResIcon} alt="vector icone res" />
      <img className="root" src={RootIcon} alt="vector icone root" />
      <img className="book" src={BookIcon} alt="vector icone book" />
    </Container>
  );
};

export default Vectors;
