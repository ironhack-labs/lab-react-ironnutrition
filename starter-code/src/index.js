import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import FoodContextProvider from "./FoodContext";

ReactDOM.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  document.getElementById("root")
);
registerServiceWorker();
