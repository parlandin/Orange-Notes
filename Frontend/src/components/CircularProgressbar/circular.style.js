import styled from "styled-components";

const ContainerTiming = styled.div`
  width: 150px;
  height: 150px;
`;

const Timming = styled.div`
  background-color: #67a442;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: conic-gradient(
    #67a442 ${({ time }) => time * 3.6 + "deg"},
    #97989fd1 ${({ time }) => time * 3.6 + "deg"}
  );

  &::before {
    content: "";
    border-radius: 50%;
    z-index: 1;
    width: 85%;
    height: 85%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  & p {
    z-index: 1;
    font-size: 1.9rem;
    font-weight: 600;
  }
`;

export default { ContainerTiming, Timming };
