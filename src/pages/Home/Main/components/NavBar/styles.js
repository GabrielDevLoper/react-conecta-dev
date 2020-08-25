import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "275px",
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: "350px",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    width: "100%",
  },
}));

export default useStyles;
