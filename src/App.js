import { useState } from 'react'
import './App.css';
import foodsJson from "./foods.json";
import Foodbox from './Components/Foodbox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App () {
  let [foods, setFoods] = useState(foodsJson);
  let [foodFilterData, setFoodFilterData] = useState(foods); 

  let addNewFood = (newFood) => {
    let updatedFoods = [...foodsJson, newFood];
    setFoods(updatedFoods);
  }

  let handleSelect = (filteredFood) => {
    setFoodFilterData(filteredFood);
  }

  let filterFoodList = (str) => {
    let filteredFood;
    if (str === "") {
      filteredFood = foods;
    } else {
      filteredFood = foods.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoodFilterData(filteredFood);
  };

  return(
      <div className="App">
        <Search searchFood={filterFoodList}/>
        {foods.map((food) => {
          return(
            <div className="centered">
              <Foodbox food = {food}/>
            </div>
          )
        })
        }
        <div>
              <AddFoodForm addNewFood={addNewFood}/>
          </div>
      </div>
  )
}
export default App; 