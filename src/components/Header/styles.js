import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
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
  },

  bell: {
    marginLeft: 10,
  },
}));

export default useStyles;
