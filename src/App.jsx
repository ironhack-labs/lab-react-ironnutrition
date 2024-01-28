import React, { useState } from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const filteredFoods = foods.filter((food) => food.id !== id);
    setFoods(filteredFoods);
  };

  const addFood = (newFood) => {
    const newId = Math.max(...foods.map((food) => food.id), 0) + 1;

    // Crea un nuevo objeto de alimento con el nuevo ID
    const foodToAdd = { id: newId, ...newFood };

    // Actualiza el estado con el nuevo alimento agregado
    setFoods((prevFoods) => [...prevFoods, foodToAdd]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onSubmit={addFood}/>

      <div className="row">
        {foods.map((food) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={food.id}>
            <FoodBox food={food} onDeleteFood={deleteFood} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
