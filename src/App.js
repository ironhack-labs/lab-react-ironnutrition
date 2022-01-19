import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.js'
import Search from './components/Search';
import meals from './foods.json';
import AddList from './components/AddList';

const App = () => {
  const foodsInitialValue = [...meals];
  const [foods, setFoods] = useState(foodsInitialValue);

  const { foodBox, selectedFoods } = FoodBox(foods, setFoods);

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <Search foodsInitialValue={foodsInitialValue} foods={foods} setFoods={setFoods} />
      <div className="columns">
        {foodBox}
        <AddList selectedFoods={selectedFoods} />
      </div>
    </div>
  );
};

export default App;