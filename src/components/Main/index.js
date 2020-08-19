import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

import useStyles from "./styles";

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Feed />
      <NavBar />
    </main>
  );
}

export default Main;
