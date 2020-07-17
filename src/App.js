import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';

function App() {
  const initialState = {
    selectedFoods: [],
  };

  const [state, setState] = useState(initialState);

  const handleAdd = (food) => {
    const newFoods = [...state.selectedFoods];
    newFoods.push(food);
    setState({ selectedFoods: newFoods });
  };

  const foodsList = foods.map((food) => {
    return <FoodBox key={food.name} food={food} handleAdd={handleAdd} />;
  });
  const selectedFoodsList = foods.map((food) => {
    return <FoodBox key={food.name} food={food} />;
  });
  return (
    <div className="container">
      <div className="column is-half">{foodsList}</div>
      <div className="column is-half">{selectedFoodsList}</div>
    </div>
  );
}

export default App;
