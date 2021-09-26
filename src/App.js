import React, { useState } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBoxList from './FoodBoxList';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [foodsObject, setFoods] = useState(foods);
  const [isAdding, setIsAdding] = useState(false);

  const displayFoodForm = () => {
    setIsAdding(!isAdding);
  };

  //* remember to ask about this
  const updateFoods = (addedFood) => {
    addedFood &&
      setFoods([
        ...foods,
        {
          name: addedFood.name,
          calories: addedFood.calories,
          image: addedFood.image,
          quantity: 0,
        },
      ]);
    //console.log('this is the foods array after updating it ' + foods);
  };

  const searchFoods = (event) => {
    setFoods(foodsObject);
    console.log(event.target.value);
    // if (event.target.value === '') {
    //   setFoods(foodsObject);
    // }
    const filteredFoods = foodsObject.filter((food) => {
      return food.name.toLowerCase().includes(event.target.value);
    });
    setFoods(filteredFoods);
  };

  return (
    <div>
      <Search searchFoods={searchFoods} />
      {isAdding && (
        <AddFoodForm hideForm={displayFoodForm} foodFormHandler={updateFoods} />
      )}
      {!isAdding && <button onClick={displayFoodForm}>Add New Food</button>}
      <FoodBoxList foods={foodsObject} />;
    </div>
  );
}

export default App;
