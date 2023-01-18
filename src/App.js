import { useState } from 'react';
import './App.css';
import foodsFromJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  const [foodArr, setFoodArr] = useState(foodsFromJson);
  
  const addFood = (newFoodObj) => {
    //update list of foods
        setFoodArr( (prevListOfFoods) => {
            const newList = [newFoodObj, ...prevListOfFoods];
            return newList;
        });
  }

  const deleteFood = (nameOfFoodToDelete) => {
    // calc the new list of foods
    const newListOfFoods = foodArr.filter((food) => {
      return food.name !== nameOfFoodToDelete;
    });
    //update state
    setFoodArr(newListOfFoods);
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      
      <AddFood callbackToAdd={addFood} />
      {foodArr.map((foodObj) => {
        return (
          <>
          <FoodBox key={foodObj.name} food={foodObj} callbackToDelete={deleteFood}/> 
          </>
        );
      })}
    </div>
  );
}

export default App;
