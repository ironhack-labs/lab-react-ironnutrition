import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodsJson from '../foods.json';

const FoodList = ()=> {
    const [foods, setFoods] = useState(foodsJson)

  const deleteFood = foodId => {
    // returns every food that does NOT have this movieId
    const filteredFoods= foods.filter(food => foodId !== food.id);

    setFoods(filteredFoods);
  };

  const addNewFood = newFood =>{
    const increasedFoodList = [newFood, ...foods]
    setFoods(increasedFoodList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
      <AddFoodForm addFoodHandler={addNewFood}/>

      </div>

      <div>
        {foods.map(food => {
          return (
            <FoodBox 
              key= {food.id}
              id={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              nrServings={food.servings}
              dltBttn={deleteFood}
            />
            )}) 
        }
      </div>
   
    </div>
  );


}

export default FoodList