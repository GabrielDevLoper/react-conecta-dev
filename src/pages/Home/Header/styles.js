import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
  },

  img: {
    maxHeight: 55,
  },

  grow: {
    flexGrow: 1,
  },

  userSection: {
    display: "flex",
    alignItems: "center",
  },

  button: {
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  avatar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  bell: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
