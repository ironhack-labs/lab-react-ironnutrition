import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FoodBox from "./components/FoodBox"
import Form from "./components/Form"

const App = () => {

  return (

    <Router>


      <Switch>
        <Route path="/" exact component={FoodBox} />
        <Route path="/" exact component={Form} />

      </Switch>

    </Router>


  );

}

export default App;
