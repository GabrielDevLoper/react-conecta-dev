import React from "react";
import { Button } from "@material-ui/core";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div className="group1">
          <a href="/">Conecta Dev</a>
          <input type="text" />
        </div>
        <div className="grow" />
        <div className="group2">
          <Button color="primary" variant="contained">
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
