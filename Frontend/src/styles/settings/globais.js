import { createGlobalStyle } from "styled-components";

const Globais = createGlobalStyle`
    body {
        background-color: var(${({ theme }) => theme.color.primary});
        font-family: 'Poppins', sans-serif;
    }
`;

export default Globais;
