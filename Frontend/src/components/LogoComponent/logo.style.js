import styled from "styled-components";

const Logo = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 34px;
  height: 34px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.p`
  color: var(${({ theme }) => theme.color.secondary});
  font-size: 1.3rem;
`;

export default { Logo, LogoImg, LogoText };
