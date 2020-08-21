import React from "react";

//componentes
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core";

//tema padrão do material e customizando
import theme from "./theme";

//simulando api
import "./mock";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
