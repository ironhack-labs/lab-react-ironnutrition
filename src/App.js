import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);
  const [searchQuery, setSearchQuery] = useState('');

  const foodItemsToDisplay = foodsArray.filter( (foodItem) => {
   return foodItem.name.toLowerCase().includes(searchQuery.toLowerCase());
  });


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
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      {foodItemsToDisplay.map((foodObj) => {
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
