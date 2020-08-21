import React from "react";
import {
  Paper,
  Button,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import useStyles from "./styles";

const tags = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "NodeJS" },
  { id: 3, name: "Laravel" },
  { id: 4, name: "Flutter" },
  { id: 5, name: "VueJS" },
  { id: 6, name: "React Native" },
];

function NavBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.navBar}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Registrar Gratis
      </Button>

      <ListSubheader>{`Tags em alta`}</ListSubheader>
      {tags.map((tag) => (
        <ListItem dense button key={tag.id}>
          <ListItemText>{tag.name}</ListItemText>
        </ListItem>
      ))}
      <ListItem dense button>
        Exibir mais tags
      </ListItem>
    </Paper>
  );
}

export default NavBar;
