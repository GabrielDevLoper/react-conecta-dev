import React from "react";
import useStyles from "./styles";

function NavBar() {
  const classes = useStyles();
  return <div className={classes.navBar}>navbar</div>;
}

export default NavBar;
