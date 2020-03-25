import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Home from "./components/Home";

const App = () => (
  <Router>
    <Switch>
      {/* // A los componentes hay que llamarlos, no pueden ser funciones */}
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default App;
