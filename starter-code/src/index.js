import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/index.css";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
