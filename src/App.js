import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
//import FoodBox from './components/FoodBox';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);

  const createMeal = (newMealObj) => {
    setFoodsArray((prevListOfMeal) => {
      const newList = [newMealObj, ...prevListOfMeal];
      return newList;
    });
  };

  return (
    <div className="App">
    <AddFoodForm callbackToCreate={createMeal} />
      {foodsArray.map((foodObj) => {
        return (
          <div>
            <FoodBox foodItem={foodObj}></FoodBox>
          </div>
        );
      })}
    </div>
  );
}

export default App;
