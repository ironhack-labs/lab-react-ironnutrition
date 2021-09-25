import React, { useState } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBoxList from './FoodBoxList';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foodsObject, setFoods] = useState(foods);
  const [isAdding, setIsAdding] = useState(false);

  const displayFoodForm = () => {
    setIsAdding(true);
  };

  //* remember to ask about this
  const updateFoods = (addedFood) => {
    //const foodsCopy = foods.slice();
    //foodsCopy.push(addedFood);
    setFoods([
      ...foods,
      {
        name: addedFood.name,
        calories: addedFood.calories,
        image: addedFood.image,
        quantity: 0,
      },
    ]);
    console.log('this is the foods array after updating it ' + foods);
  };
  return (
    <div>
      {isAdding && <AddFoodForm foodFormHandler={updateFoods} />}
      {!isAdding && <button onClick={displayFoodForm}>Add New Food</button>}
      <FoodBoxList foods={foodsObject} />;
    </div>
  );
}

export default App;
