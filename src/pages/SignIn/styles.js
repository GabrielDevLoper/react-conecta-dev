import styled from "styled-components";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    background: "#121214",
  },

  title: {
    color: "#fff",
    fontSize: 35,
    lineHeight: "200px",
  },

  imgLogo: {
    width: 500,
    height: 300,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    background: "#7000f2",
    marginBottom: 30,
  },

  icon: {
    color: "#7000f2",
  },

  button: {
    height: 50,
    marginTop: 30,
    transition: "0.4s",
  },

  register: {
    color: "#7000f2",
    fontWeight: "bold",
    fontSize: 17,
    transition: "0.4s",
    marginTop: 8,

    "&:hover": {
      color: "#9034fa",
    },
  },

  responsive: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  background: "#121214",
  borderRadius: "8px",

  label: {
    color: "#fff",
  },
  "label.Mui-focused": {
    color: "#fff",
  },

  ".MuiOutlinedInput-input": {
    color: "#fff",
    width: "350px",
    [useTheme().breakpoints.down("xs")]: {
      width: "250px",
    },

    fieldset: {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
      outlineColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7000f2",
    },
  },
}));

export { useStyles, StyledTextField };
