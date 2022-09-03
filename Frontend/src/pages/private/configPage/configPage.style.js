import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  padding: 10px 10px 0;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  margin-right: 10px;
`;

const WrapperInfo = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  //height: 100px;
  border-radius: 6px;
  box-shadow: 1px 1px 3px #a8a3a3, -1px -1px 3px #a8a3a3;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperPicture = styled.div`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #ff5f19;
  margin: 10px;

  width: 100px;
  height: 100px;
  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 464px) {
    display: none;
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

const field = styled.p`
  margin: 15px;
  font-weight: 400;

  @media (max-width: 366px) {
    font-size: 0.8rem;
  }
`;

const WrapperUser = styled.div``;

const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Warnig = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #626060;
  text-align: center;

  @media (max-width: 530px) {
    top: 80%;
    transform: translate((0, -50%));
  }
`;

export default {
  Container,
  Header,
  Title,
  WrapperInfo,
  WrapperPicture,
  WrapperUser,
  Span,
  field,
  Warnig,
  WrapperButton,
};
