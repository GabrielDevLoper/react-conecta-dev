import { Input } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const StyledInput = withStyles((theme) => ({
  root: {},
}))(Input);

export { useStyles, StyledInput };
