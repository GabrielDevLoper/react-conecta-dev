import React from "react";

//componentes
import Header from "./Header";
import Main from "./Main";

import useStyles from "./styles";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <Main />
    </div>
  );
}

export default Home;
