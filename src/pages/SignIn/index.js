import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Componentes e estilizações
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  Link,
  Hidden,
  FormHelperText,
} from "@material-ui/core";
import { useStyles, StyledTextField } from "./styles";

//Icones ou imagens
import LogoDev from "../../assets/dev.svg";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Hidden mdDown>
          <Grid
            item
            container
            xl={6}
            lg={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img src={LogoDev} alt="logo" className={classes.imgLogo} />
            <Typography className={classes.title}>
              <strong>Faça seu login na plataforma</strong>
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          xl={6}
          lg={6}
          sm={12}
          xs={12}
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
            className={classes.responsive}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && (
                <FormHelperText error>{errorMessage}</FormHelperText>
              )}
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
