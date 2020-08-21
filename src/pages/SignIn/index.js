import React from "react";
import { useHistory } from "react-router-dom";

//Componentes e estilizações
import { Grid, Box, Typography, Avatar, Button, Link } from "@material-ui/core";
import { useStyles, StyledTextField } from "./styles";

//Icones ou imagens
import LogoDev from "../../assets/dev.svg";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import api from "../../services/api";

function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  async function handleSignIn(e) {
    e.preventDefault();
    const response = await api.post("/api/home/login");
    console.log(response);
    // history.push("/");
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          container
          md={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <img src={LogoDev} alt="logo" className={classes.imgLogo} />
          <Typography className={classes.title}>
            <strong>Faça seu login na plataforma</strong>
          </Typography>
        </Grid>

        <Grid
          item
          container
          md={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="#202024"
            p={5}
            borderRadius={8}
          >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <form className={classes.form}>
              <StyledTextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                name="email"
                label="E-mail"
                autoFocus
                color="secondary"
              />

              <StyledTextField
                id="standard-adornment-password"
                variant="outlined"
                required
                color="secondary"
                label="Senha"
                name="password"
                margin="normal"
                type="password"
              />
              <Grid container>
                <Grid item>
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.register}
                    underline="none"
                  >
                    {" "}
                    Não tem uma conta? Registre-se
                  </Link>
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="secondary"
                className={classes.button}
                onClick={handleSignIn}
              >
                Entrar
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
//3311-5676
