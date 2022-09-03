import styled from "styled-components";

const Container = styled.header`
  position: relative;
  width: 100%;
  border-radius: 0px 0px 6px 6px;
  height: 55px;

  @media (max-width: 380px) {
    height: 60px;
  }
`;

const HeaderFix = styled.div`
  position: fixed;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  z-index: 4;

  @media (max-width: 380px) {
    height: 60px;
  }
`;

export default {
  Container,
  HeaderFix,
};
