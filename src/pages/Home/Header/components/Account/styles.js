import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    cursor: "pointer",
  },

  icons: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
