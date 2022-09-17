import { createGlobalStyle } from "styled-components";

const Globais = createGlobalStyle`
    html {
        @media (max-width: 680px){
            font-size: 13px;
        }
    }

    body {
        background-color: var(${({ theme }) => theme.color.primary});
        font-family: 'Poppins', sans-serif;
    }
`;

export default Globais;
