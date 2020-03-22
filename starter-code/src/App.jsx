import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Food from "./pages/Food";
import "bulma/css/bulma.css";
import Root from "./styles/Root";
import NavItem from "./components/NavItem";
import Form from "./pages/Form";
import FoodContextProvider from "./api/food.api";

const App = () => (
  <FoodContextProvider>
    <Router>
      <Root>
        <Switch>
          <Route path="/" exact component={Food} />
          <Route path="/new" exact component={Form} />
        </Switch>
      </Root>
    </Router>
  </FoodContextProvider>
);
export default App;
