import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from "react-hot-loader/root";
import React from "react";

import Logo from "./logo.svg";

import "./App.css";
import "antd/dist/antd.css";

import styles from "./styles/common.scss";

function App() {
  return (
    <div>
      <header className="App-header">
        <Logo className="App-logo" alt="logo" />
        <p className={styles.App}>
          Edit kkasdasdasdasdasdasdasdasdasdasd save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(App);
