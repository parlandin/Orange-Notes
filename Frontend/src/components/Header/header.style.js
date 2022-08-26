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

export default {
  Container,
  HeaderFix,
};
