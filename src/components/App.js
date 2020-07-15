import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import FoodBox from './FoodBox/FoodBox'
import FoodForm from './FoodForm/FoodForm'


function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <Switch>
        <Route path="/foodform" render={() => <FoodForm />} />
      </Switch>

      <FoodBox/>
    </div>
  )
}

export default App;
