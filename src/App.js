import React, { useState } from 'react';

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
      <AddFoodForm
        food={food}
        setFood={setFood}
      />
      {showFood}
    </div>
  );

}