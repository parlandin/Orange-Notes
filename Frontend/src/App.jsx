import React from "react";
import Routers from "./routers";
import GlobalStyles from "./styles/GlobalStyles";
import { ligthTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { AuthContextProvide } from "./context/authContext";

const App = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <AuthContextProvide>
        <GlobalStyles />
        <Routers />
      </AuthContextProvide>
    </ThemeProvider>
  );
};

export default App;
