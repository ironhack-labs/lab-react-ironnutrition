import foodsJson from "../foods.json"
import FoodBox from "./FoodBox";
import { useState } from 'react';
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    setFoods(currentFoods => currentFoods.filter(food => food.id !== id));
  };

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
};

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((food, index)=>{
          return(<FoodBox key={food.id} food ={food} deleteFood={deleteFood}/>)
        })}
    </div>
  );
}

export default FoodList;