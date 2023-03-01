import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from "./components/Search";

function App() {

  const [foodsData, setFoodsData] = useState(foods);
  const [food, setFoods] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...food, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);
    console.log(food)
  };

  const filterFoods = (str) => {
    let filteredFoods;
    let firstLetters;
    if (str === "") {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        for (let i = 0; i < str.length; i++) {
          console.log(str)
         return food.name[i].toLowerCase() === str[i].toLowerCase();
          
        }
      });
    }

    setFoods(filteredFoods)
  }


  return (
    <div className="App">
    <AddFoodForm
      addNewFood={addNewFood}
    />
    <Search
      filterFoods={filterFoods}
    />
    <div className="foods-container">
    {food.map((food) => {
        return (
          
             <FoodBox
             food = {food}
             />
          )
      })}
    </div>
      
     
    </div>
  );
}

export default App;
