import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import "../public/styles/index.css";

import { FoodsContextProvider } from "./context/Context";

import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <FoodsContextProvider>
      <App />
    </FoodsContextProvider>,
    root
  );
});
