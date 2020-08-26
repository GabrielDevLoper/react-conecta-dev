import React from "react";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import useStyles from "./styles";

import Logo from "../../../assets/logo.png";

import { Account, Notification, WritePost } from "./components";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src={Logo} alt="logo" className={classes.img} />
        {/* esta div vazial apenas com uma classe, faz a separação dos elementos */}
        <div className={classes.grow} />
        <div className={classes.userSection}>
          <WritePost />
          <Notification />
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
