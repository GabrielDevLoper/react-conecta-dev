import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
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
}));

const StyledTextField = styled(TextField)`
  background: #121214;
  border-radius: 8px;
  label {
    color: #fff;
  }
  label.Mui-focused {
    color: #fff;
  }
  .MuiOutlinedInput-root {
    color: #fff;
    width: 350px;
    fieldset {
      border-color: none;
    }
    &:hover fieldset {
      border-color: transparent;
      outline-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: #7000f2;
    }
  }
`;

export { useStyles, StyledTextField };
