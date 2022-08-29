import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #1e1e1e;
`;

const QuoteSection = styled.div`
  padding: 5px 10px;
  margin-left: 10px;
  border-left: 3px solid #848484;
  display: flex;
  flex-direction: column;
  width: 100%;

  & p {
    font-family: "Caveat", cursive;
    font-size: 1.4rem;
    word-break: break-all;
    margin-bottom: 4px;
  }

  & span {
    font-size: 0.75rem;
    font-weight: 600;
    font-weight: 400;
    font-style: italic;
  }
`;

const Carrousel = styled.div`
  width: 100%;
  position: relative;
`;

const CardsSection = styled.div`
  max-width: 100%;
  margin: 30px 10px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;

  &.left {
    left: -10px;
  }

  &.right {
    right: -10px;
  }

  @media (max-width: 910px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 1px;

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 561px) {
    display: none;
  }
`;

const GenericSection = styled.div`
  padding: 5px 0;
  width: 100%;
`;

const GenericTitle = styled.h2`
  padding: 5px 10px;
  font-size: 1.2rem;
  color: #1e1e1e;
`;

const NotesCard = styled(Link)`
  text-decoration: none;
  padding: 15px;
  background-color: #cbf1f3;
  margin-right: 15px;
  border-radius: 6px;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  color: #030c0df2;
  transition: all 200ms ease-in-out;
  flex: 0 0 auto;

  & p {
    font-size: 1rem;
  }

  &:hover {
    transform: translate(-1px, -1px);
    background-color: #b8e6e8;
  }
`;

const ComingSoon = styled.p`
  margin: 20px 10px;
  font-size: 1rem;
  color: #4c4646;
`;

export default {
  Container,
  Header,
  Title,
  SlideButton,
  QuoteSection,
  CardsSection,
  Carrousel,
  GenericSection,
  GenericTitle,
  NotesCard,
  ComingSoon,
};
