import styled from "styled-components";

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

  & span.name {
    color: var(${({ theme }) => theme.color.secondary});
  }

  & > span.days {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  & span.day {
    color: var(${({ theme }) => theme.color.secondary});
    font-size: 0.8rem;
  }

  @media (max-width: 430px) {
    align-items: flex-start;
    & > p {
      font-size: 0.9rem;

      & span {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 380px) {
    & > p {
      max-width: 100px;
    }
  }
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

export default { WrapperUser, WrapperUser, UserPicture, WelcomeUser };
