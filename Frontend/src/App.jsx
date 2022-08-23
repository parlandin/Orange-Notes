import React from "react";
import Routers from "./routers";
import GlobalStyles from "./styles/GlobalStyles";
import { ligthTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyles />
      <Routers />
    </ThemeProvider>
  );
};

export default App;
