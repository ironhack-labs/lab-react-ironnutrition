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
  const deleteMeal = (foodName) => {
    const newListOfMeals = foodsArray.filter((food) => {
      return food.name !== foodName;
    });
    setFoodsArray(newListOfMeals);
  };

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={createMeal} />
      {foodsArray.map((foodObj) => {
        return (
          <div>
          <FoodBox key={foodObj.name} foodItem={foodObj} callbackToDelete={deleteMeal}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
