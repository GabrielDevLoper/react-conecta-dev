import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Menu, MenuItem, Switch, useTheme } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ConnectionsIcon from "@material-ui/icons/SettingsInputComposite";

import useStyles from "./styles";

import avatar from "../../../../../assets/avatar.jpg";

function Account() {
  const classes = useStyles();
  const ref = useRef();
  const history = useHistory();
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleMenu() {
    setIsVisible(!isVisible);
  }

  function handleLogout() {
    history.push("/sign-in");
  }

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleVisibleMenu}
        alt="Gabriel Barreto"
        src={avatar}
        className={classes.avatar}
      />
      <Menu
        anchorEl={ref.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isVisible}
        onClose={handleVisibleMenu}
        getContentAnchorEl={null}
      >
        <MenuItem>
          <ConnectionsIcon className={classes.icons} />
          Minhas Conexões
        </MenuItem>
        <MenuItem>
          <BookmarkIcon className={classes.icons} />
          Meus Favoritos
        </MenuItem>
        <MenuItem>
          <EmailIcon className={classes.icons} />
          Meus Posts
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon className={classes.icons} />
          Sair
        </MenuItem>
        <MenuItem>
          <Switch color="primary" />
          Modo Escuro
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
