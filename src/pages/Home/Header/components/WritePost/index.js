import React from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";

function WritePost() {
  const classes = useStyles();

  return (
    <>
      <Button variant="contained" color="primary" className={classes.button}>
        NOVO POST
      </Button>
    </>
  );
}

export default WritePost;
