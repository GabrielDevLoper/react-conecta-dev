import React from "react";
import { Button, AppBar, Toolbar, Avatar, IconButton } from "@material-ui/core";
import useStyles from "./styles";

import Logo from "../../assets/logo.png";
import { SvgIcon } from "@material-ui/core";
import { Bell } from "react-feather";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src={Logo} alt="logo" className={classes.img} />
        {/* esta div vazial apenas com uma classe, faz a separação dos elementos */}
        <div className={classes.grow} />
        <div className={classes.userSection}>
          <Button variant="outlined" color="primary" className={classes.button}>
            NOVO POST
          </Button>
          <IconButton>
            <SvgIcon>
              <Bell></Bell>
            </SvgIcon>
          </IconButton>
          <Avatar alt="Gabriel Barreto" src="/" className={classes.bell} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
