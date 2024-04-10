import { useState } from 'react';
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";


function FoodList() {
  const [ foods, setFoods ] = useState(foodsJson);

  const handleDelete = (food) => {
    setFoods(foods.filter((e) => e.id != food.id));
  }

  const handleCreate = (food) => {
    setFoods([...foods, {...food, id: self.crypto.randomUUID()}]);
  }

  return (
    <div className="food-list">
      <h1>Raúl | React IronNutrition</h1>
      <AddFoodForm onCreate={handleCreate}/>
      <>
        <div>
          {foods.map((food) => (
            <FoodBox
              key={food.id}
              food={food}
              onDelete={handleDelete}
            />
          ))}  
        </div>
      </>    
    </div>
  );
}

export default FoodList;
