import ReactDOM from "react-dom";
import React from "react";
import App from "./App.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
    <App/>,
  document.getElementById("root")
);
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}