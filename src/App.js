import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { Provider } from "react-redux";
import globalStore from "./store/store";
import { hot } from "react-hot-loader/root";

// Styles
import "./styles/common.css";
import "antd/dist/antd.css";

// Pages
import Home from "@src/pages/Home";

function App() {
  return (
    <Provider store={globalStore}>
      <Home />
    </Provider>
  );
}

export default hot(App);
