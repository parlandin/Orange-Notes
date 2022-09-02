import React from "react";
import Routers from "./routers";
import GlobalStyles from "./styles/GlobalStyles";
import { ligthTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { AuthContextProvide } from "./context/authContext";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvide>
          <GlobalStyles />
          <Routers />
        </AuthContextProvide>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
