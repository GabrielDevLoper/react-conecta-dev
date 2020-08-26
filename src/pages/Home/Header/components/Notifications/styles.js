import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bell: {
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
    margin: theme.spacing(1),
  },
}));

export default useStyles;
