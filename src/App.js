import React from "react";

//componentes
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core";

//tema padrão do material e customizando
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
