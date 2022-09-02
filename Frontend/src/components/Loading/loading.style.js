import styled, { keyframes, css } from "styled-components";

const color = "#ff5722d9";
const variavel = 2.5;

const animation = keyframes`
  25%{
        box-shadow: calc(90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(-90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(90px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color},
        calc(-90px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color};
    }
    50%{
        box-shadow: calc(90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(-90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(180px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color},
        calc(-180px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color};
    }
    75%{
        box-shadow: calc(90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(-90px / ${variavel}) 0 0 calc(-7px / ${variavel}) ${color},
        calc(90px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color},
        calc(-90px / ${variavel}) 0 0 calc(-15px / ${variavel}) ${color};
    }
    100%{
        box-shadow: 0 0 0 (-7px / ${variavel}) ${color},
        0 0 0 calc(-7px / ${variavel}) ${color},
        0 0 0 calc(-15px  / ${variavel}) ${color},
        0 0 0 calc(-15px / ${variavel}) ${color};
    }
`;

const cssAnim = css`
  animation: ${animation} 2.4s forwards infinite;
`;

const Container = styled.div`
  height: calc(80px / ${variavel});
  width: calc(80px / ${variavel});
  background-color: ${color};
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 calc(-7px / ${variavel}), 0 0 0 calc(-7px / ${variavel}),
    0 0 0 calc(-15px / ${variavel}), 0 0 0 calc(-15px / ${variavel});
  ${cssAnim}
`;

export default { Container };
