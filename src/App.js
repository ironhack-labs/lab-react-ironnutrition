import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodButton from './components/AddFoodButton';
import { Switch, Route } from 'react-router-dom';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const state = {
    searchParam: '',
    foodList: [...foods],
    selectedFoods: [],
  };
  const [stateFoods, setStateFoods] = useState(state);
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setStateFoods((state) => ({ ...state, searchParam: value }));
  };
  return (
    <div className="App container">
      <h1>IronNutrition</h1>
      <Switch>
        <Route exact path="/">
          <div className="App-wrapper">
            <Search
              searchParam={stateFoods.searchParam}
              handleChange={handleChange}
            />
            <AddFoodButton />
          </div>
          <FoodBox
            searchParam={stateFoods.searchParam}
            foodList={stateFoods.foodList}
          />
        </Route>
        <Route exact path="/add-food">
          <AddFoodForm stateFoods={stateFoods} setStateFoods={setStateFoods} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
