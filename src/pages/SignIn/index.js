import React from "react";
import { Input, Grid, Box, Typography } from "@material-ui/core";

import useStyles from "./styles";
import LogoDev from "../../assets/dev.svg";

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src={LogoDev} alt="logo" className={classes.imgLogo} />
        <Typography className={classes.title}>
          <strong>Faça seu login na plataforma</strong>
        </Typography>
      </div>
      <div className={classes.right}>
        <form className={classes.form}>
          <h4>Acesso</h4>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
