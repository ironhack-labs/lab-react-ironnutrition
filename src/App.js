import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodButton from './components/AddFoodButton';
import { Switch, Route } from 'react-router-dom';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [stateFoods, setStateFoods] = useState(foods);
  return (
    <div className="App container">
      <Switch>
        <Route exact path="/">
          <AddFoodButton />
          <FoodBox stateFoods={stateFoods} />
        </Route>
        <Route exact path="/add-food">
          <AddFoodForm stateFoods={stateFoods} setStateFoods={setStateFoods} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
