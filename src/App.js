import React from "react";

//componentes
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
