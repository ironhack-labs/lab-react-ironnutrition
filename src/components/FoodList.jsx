import { useState } from "react";
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";




function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const foodCopy = [...foods];

    const filteredFood = foodCopy.filter((food) => {
        return food.id !== foodId;
    })

    setFoods(filteredFood);
  }

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]

    setFoods(updatedFoods)

}

  return (
    <div>
      {foods.map((food) => {
          return(
              <FoodBox 
              key={food._id} 
              food={food}
              clickToDelete={deleteFood}/>
          )
      })}
      <AddFood addNewFood={addNewFood}/>
    </div>
  );
}

export default FoodList;