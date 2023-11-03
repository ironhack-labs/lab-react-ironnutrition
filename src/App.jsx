/* eslint-disable no-unused-vars */
import "./App.css";
import FoodBox from "./components/FoodBox/FoodBox.jsx";
import foodsJson from "./foods.json";
import {useState} from 'react';
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";

function App() {
  // 1 interaction
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    // Filter Movies, in order to get all of them EXCEPT the one that I wanted to delete
    const deletedFoods = foods.filter(food=>{ //é para usar filter, porra!!
        return food.id !== foodId;
    }); 
    
    // Update the State with the filtered movies
    setFoods(deletedFoods)
}

const addNewFood = (newFood) =>{
  // Create a new array that has all the movies + new movie
  const newListOfFood = [...foods, newFood];
  
  // Update the State with a new list of movies
  setFoods(newListOfFood);
}

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood}/>

      {foods.map((food, index) =>{
    return (<FoodBox key={index} food={food} delete={deleteFood}/>)

  })}
    </div>
  );
}

export default App;