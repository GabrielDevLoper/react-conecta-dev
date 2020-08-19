import React from "react";
import "./styles.css";

function Home() {
  return (
    <div>
      <header className="header">
        <div className="toolbar">
          <div className="group1">
            <a href="/">Conecta Dev</a>
            <input type="text" />
          </div>
          <div className="grow" />
          <div className="group2">
            <button>Novo Post</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
      <div className="toolbar" />
      <main className="main">
        <div className="nav-bar">navbar</div>
        <div className="feed">feed</div>
      </main>
    </div>
  );
}

export default Home;
