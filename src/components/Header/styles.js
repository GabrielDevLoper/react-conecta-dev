import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  header: {
    background: "white",
    position: "fixed",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    minHeight: "64px",
  },
}));

export default useStyles;
