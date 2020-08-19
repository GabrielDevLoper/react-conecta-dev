import React from "react";
import Header from "../../components/Header";

import Main from "../../components/Main";

import "./styles.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="toolbar" />
      <Main />
    </div>
  );
}

export default Home;
