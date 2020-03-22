import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* --- UI Framework --- */

import "bootstrap/dist/css/bootstrap.min.css";

/* --- Styling --- */

import "./App.css";

/* --- Components --- */

import { Home } from "./pages/Home";

/* --- Context --- */

import DataContextProvider from "./contexts/DataContext";

const App = () => (
  <DataContextProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </DataContextProvider>
);
export default App;
