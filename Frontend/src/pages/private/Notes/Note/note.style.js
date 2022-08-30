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
  //justify-content: space-between;
  align-items: center;
  padding: 5px 0 25px;
  background-color: #fff;
  padding-top: 30px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px #d9d9d9ad, -1px -1px 3px #d9d9d9ad;
`;

const Content = styled.p`
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
`;

export default { Container, Title, Content, Header, ContainerFixed };
