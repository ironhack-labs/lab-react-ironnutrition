import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FoodBox from "./components/FoodBox"

const App = () => {

  return (

    <Router>


      <Switch>
        <Route path="/" exact component={FoodBox} />

      </Switch>

    </Router>


  );

}

export default App;
