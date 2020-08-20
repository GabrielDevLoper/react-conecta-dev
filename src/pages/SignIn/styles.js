import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    background: "#121214",
  },

  left: {
    color: "white",

    display: "flex",
    flexBasis: "58%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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

  right: {
    color: "white",

    display: "flex",
    flexBasis: "42%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
