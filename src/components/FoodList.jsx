import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFood, setFilteredFood] = useState(foods)

  const deleteFood = (id) => {
    const foodsCopy = [...foods];
    foodsCopy.forEach((food, index) => {
      if (food.id === id) {
        foodsCopy.splice(index, 1);
      }
    });

    setFoods(foodsCopy);
    setFilteredFood(foodsCopy)
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    setFilteredFood(updatedFoods)
  };
  
  const searchFood = (searchedName) => {
    
    const result = foods.filter((food) => {
      if(searchedName === ''){
        return food
      }
      else {
        return food.name.toLowerCase().includes(searchedName)
      }
    });
    setFilteredFood(result);
    console.log(foods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <SearchBar searchFood={searchFood}/>
      <AddFoodForm addNewFood={addNewFood} />
      {filteredFood.map((food) => {
        return <FoodBox key={food.id} food={food} clickToDelete={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
