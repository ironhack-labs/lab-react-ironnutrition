import React, { useState } from 'react';
import './App.css';
import foods from '../foods.json';

import FoodList from './FoodList';
import CalorieTracker from './CalorieTracker';
import Search from './Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [todaysCalories, setTodaysCalories] = useState(0);
  const [todaysFoods, setTodaysFoods] = useState([]);

  function filterFoods(term) {
    if (!term) {
      return setFoodList([...foods]);
    }
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase());
    });

    return setFoodList([...filtered]);
  }

  function addFood(food) {
    const updatedFoods = [...todaysFoods, food];
    setTodaysFoods([...updatedFoods]);
    return setTodaysCalories(
      (prevState) => prevState + food.calories * food.quantity
    );
  }

  return (
    <div className="container mt-5">
      <Search foodList={foodList} handleSearch={filterFoods} />
      <div className="row">
        <div className="col-6">
          <FoodList foodList={foodList} addFood={addFood} />
        </div>
        <div className="col-6">
          <CalorieTracker foods={todaysFoods} calories={todaysCalories} />
        </div>
      </div>
    </div>
  );
}

export default App;
