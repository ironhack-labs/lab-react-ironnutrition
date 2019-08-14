import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import FoodBox from './food-products'
import form from './form'
class App extends Component {
  render() {
    return (
      <div className = "App">
        <h3>Hola</h3>
        <Switch>
           <Route exact path="/" component = {FoodBox}/>
          <Route exact path="/form" component = {form}/>
        </Switch>
        {/* <FoodBox name="pizza"/> */}
      </div>
    )
  }
}

export default App;
