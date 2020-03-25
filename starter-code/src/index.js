import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import DataContextProvider from "./DataContext";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <DataContextProvider>
      <App />
    </DataContextProvider>,
    root
  );
});
