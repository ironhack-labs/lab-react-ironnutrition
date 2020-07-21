import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import SearchBar from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';
import FoodCollection from './components/FoodCollection';

export default function App() {

  const [food, setFood] = useState({
    form: {
      name: '',
      image: '',
      calories: 0,
      quantity: 0
    },
    foodCollection: [...foods]
  })

  const [state, setState] = useState({
    searchParam: '',
    foodList: [...foods],
  })

  const handleChange = (event) => {
    event.preventDefault()
    const value = event.target.value
    setState((state) => ({ ...state, searchParam: value }))
  };

  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <SearchBar
            searchParam={state.searchParam}
            handleChange={handleChange}
          />
          <Link to='/add'>
            Add new
          </Link>
          <FoodCollection
            searchParam={state.searchParam}
            foodList={state.foodList}
          />
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