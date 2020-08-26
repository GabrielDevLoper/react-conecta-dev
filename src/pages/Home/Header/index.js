import React from "react";
import { Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import useStyles from "./styles";

import Logo from "../../../assets/logo.png";
import { SvgIcon } from "@material-ui/core";
import { Bell } from "react-feather";

import { Account } from "./components";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src={Logo} alt="logo" className={classes.img} />
        {/* esta div vazial apenas com uma classe, faz a separação dos elementos */}
        <div className={classes.grow} />
        <div className={classes.userSection}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            NOVO POST
          </Button>
          <IconButton className={classes.bell}>
            <SvgIcon>
              <Bell />
            </SvgIcon>
          </IconButton>
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
