import React from "react";
import { Button, AppBar, Toolbar } from "@material-ui/core";
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
        <div>
          <Button variant="outlined" color="primary">
            NOVO POST
          </Button>

          <SvgIcon>
            <Bell></Bell>
          </SvgIcon>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
