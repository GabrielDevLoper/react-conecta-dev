import React from "react";

import { Container, Box } from "@material-ui/core";

//Componentes
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

import useStyles from "./styles";

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Container maxWidth="xl">
        <Box display="flex">
          <NavBar />
          <Feed />
        </Box>
      </Container>
    </main>
  );
}

export default Main;
