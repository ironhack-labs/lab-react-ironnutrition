import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

export default function App() {
  const initialState = {
    form: {
      name: '',
      image: '',
      calories: 0,
      quantity: 0
    },
    foodCollection: [...foods]

  }

  const [food, setFood] = useState(initialState)

  const showFood = food.foodCollection.map(food => (
    <FoodBox
      key={food.name}
      name={food.name}
      image={food.image}
      calories={food.calories}
    />
  ))

  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Link to='/add'>
            Add new
          </Link>
          {showFood}
        </Route>
        <Route exact path='/add'>
          <AddFoodForm
            food={food}
            setFood={setFood}
          />
        </Route>
      </Switch>
    </div>
  );

}