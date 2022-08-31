import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
  height: 100%;
  color: #1e1e1e;
`;

const ContainerFixed = styled.div`
  width: 100%;
  height: 55px;
`;

const Header = styled.div`
  top: 55px;
  width: 100%;
  height: 55px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 5px 10px 25px;
  background-color: #fff;
  padding-top: 30px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #1e1e1e;
`;

const Form = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

const SectionColor = styled.div`
  margin-bottom: 15px;
`;

const ButtonsColorContainer = styled.div`
  display: flex;
  margin: 5px 0;
  flex-wrap: wrap;
`;

const Warning = styled.p`
  color: #484646;
  font-size: 0.7rem;
  margin-left: 5px;
`;

const ColorInput = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 3px;

  & span {
    font-size: 0.9rem;
    font-weight: 600;
    color: #484646;
  }

  & input {
    display: none;
  }

  & div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ preview }) => (preview ? preview : "#b1acac")};
    margin-left: 4px;
    border: 1px solid #000;
  }
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  padding: 15px 10px;
  background-color: ${({ boxColor }) => (boxColor ? `${boxColor}cc` : "#fff")};
  border-radius: 6px;
  box-shadow: 1px 1px 3px #d9d9d9ad, -1px -1px 3px #d9d9d9ad;
  outline: none;
  border: none;
  width: 100%;
  color: ${({ titleColor }) => (titleColor ? titleColor : "#000")};
  font-weight: 600;

  &::placeholder {
    color: ${({ titleColor }) => (titleColor ? `${titleColor}cc` : "#757575")};
  }
`;

const ContentInput = styled.textarea`
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  padding: 15px 10px;
  border-radius: 6px;
  line-height: 25px;
  font-size: 1.2rem;
  font-weight: 500;
  word-wrap: break-word;
  font-family: "Roboto", sans-serif;
  text-indent: 15px;
  box-shadow: 1px 1px 3px #d9d9d9ad, -1px -1px 3px #d9d9d9ad;
  width: 100%;
  height: 300px;
  outline: none;
  border: none;
  color: ${({ contentColor }) => (contentColor ? contentColor : "#000")};
  background-color: ${({ boxColor }) => (boxColor ? `${boxColor}cc` : "#fff")};
  //7a

  &::placeholder {
    color: ${({ contentColor }) =>
      contentColor ? `${contentColor}cc` : "#757575"};
  }
`;

export default {
  Container,
  Form,
  TitleInput,
  ContentInput,
  Header,
  ContainerFixed,
  Title,
  ColorInput,
  ButtonsColorContainer,
  SectionColor,
  Warning,
};
