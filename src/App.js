import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import SearchBar from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';
import FoodCollection from './components/FoodCollection';
import TodaysFood from './components/TodaysFood'

export default function App() {

  const [food, setFood] = useState({
    form: {
      name: '',
      image: '',
      calories: 0,
      quantity: 0
    },
    foodCollection: [...foods],

  })

  const [state, setState] = useState({
    searchParam: '',
    foodList: [...foods],
    todaysFood: []
  })

  const handleChange = (event) => {
    event.preventDefault()
    const value = event.target.value
    setState((state) => ({ ...state, searchParam: value }))
  }

  const handleAddTodaysFood = ({ target }) => {

    const addedFood = food.foodCollection.filter((food, index) => {
      const match = food.name === target.name
      if (match) {
        let foodIdx = index
        return match
      }
    })
    setState(state => ({
      ...state,
      todaysFood: [...state.todaysFood, ...addedFood]
    }))
  }


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
          <div className="columns">
            <div>
              <FoodCollection
                searchParam={state.searchParam}
                foodList={state.foodList}
                addTodaysFood={handleAddTodaysFood}
              />
            </div>
            <div>
              <TodaysFood todaysFood={state.todaysFood} />
            </div>
          </div>
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