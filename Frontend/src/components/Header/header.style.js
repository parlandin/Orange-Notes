import styled from "styled-components";

const Container = styled.header`
  position: relative;
  width: 100%;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  height: 55px;
`;

const HeaderFix = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WrapperUser = styled.div`
  display: flex;
  padding: 10px;
`;

const WelcomeUser = styled.div`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #1e1e1e;
  font-weight: 500;

  & > span.days {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  & span.day {
    color: var(${({ theme }) => theme.color.secondary});
    font-size: 0.8rem;
  }
`;

const Span = styled.span`
  color: var(${({ theme }) => theme.color.secondary});
`;

const UserPicture = styled.div`
  border-radius: 6px;
  border: 1px solid #000;
  width: 35px;
  height: 35px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export default {
  Container,
  HeaderFix,
  WrapperUser,
  WrapperUser,
  UserPicture,
  WelcomeUser,
  Span,
};
