import styled from "styled-components";

const Container = styled.div``;

const TopFixedContainer = styled.div`
  width: 100%;
  height: 109px;
  position: relative;
  @media (max-width: 580px) {
    height: 145px;
  }
`;

const FixedContainer = styled.div`
  position: fixed;
  top: 55px;
  left: 55px;
  height: 109px;
  width: calc(100% - 55px);
  background-color: #fff;
  z-index: 1;
  padding: 10px;
  //box-shadow: 0px 1px 3px #e3e3e3;
  @media (max-width: 580px) {
    height: 145px;
  }
`;

const Header = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #1e1e1e;
`;

const GenericSection = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InputLabel = styled.label`
  max-width: 400px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  border: 1px solid #ff5f19;
  align-items: center;

  & svg {
    width: 30px;
    height: 30px;
    color: #ff5f19;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  border-radius: 6px;
  outline: none;
  border: none;

  &::placeholder {
    font-size: 1rem;
    padding-left: 10px;
  }
`;

const SectionButtons = styled.div`
  @media (max-width: 580px) {
    margin: 10px 0;
  }
`;

const Button = styled.button`
  color: #ff5f19;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    color: #d47951;
  }

  &.active {
    color: #872a0d;
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  & + button {
    margin-left: 5px;
  }
`;

const SectionNotes = styled.div`
  display: grid;

  &.gridActive {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, 280px);

    @media (min-width: 200px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1550px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 465px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Card = styled.div`
  border-radius: 6px;
  padding: 20px;
  background-color: ${({ boxColor }) => (boxColor ? boxColor : "#fff")};
  margin: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 4px #c1bebe;

  @media (max-width: 330px) {
    margin: 5px;
  }
`;

const CardTitle = styled.h4`
  color: ${({ titleColor }) => (titleColor ? titleColor : "#000")};
  font-size: 1.1rem;
`;

const CardContent = styled.p`
  color: ${({ contentColor }) => (contentColor ? contentColor : "#000")};
  font-size: 0.9rem;
  margin-top: 10px;
  font-weight: 500;
  line-height: 18px;
  overflow: hidden;
  height: 80%;
`;

export default {
  Container,
  Header,
  Title,
  GenericSection,
  InputLabel,
  Input,
  SectionNotes,
  Card,
  CardTitle,
  CardContent,
  SectionButtons,
  Button,
  TopFixedContainer,
  FixedContainer,
};
