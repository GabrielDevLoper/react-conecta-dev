import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  postCard: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: "auto",
    marginBottom: theme.spacing(2),
    padding: "24px",
  },
  image: {
    height: 300,
    width: "100%",
    maxWidth: "100%",
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: "auto",
  },
}));

export default useStyles;
