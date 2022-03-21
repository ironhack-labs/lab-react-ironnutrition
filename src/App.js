import React, { useState } from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  console.log(foodList);
  const addFoodToList = (form) => {
    console.log(form);
    setFoodList([...foodList, form]);
  };

  return (
    <div className="App">
      {/* show form here */}
      {showForm && <AddFoodForm addFoodToList={addFoodToList} />}
      {foodList &&
        foodList.map((food, i) => {
          return (
            <div key={i}>
              <FoodBox food={food} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
