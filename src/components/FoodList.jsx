import {useState} from 'react';
import foodJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import "./FoodList.css";

function FoodList() {
    const [foods, setFoods] = useState(foodJson);


    const handleAddFood = (newFood) => {
        setFoods([newFood, ...foods]);
    }

    const handleDelete = (id) => {
        const updateFoodList = foods.filter(food => food.id !== id);
        setFoods(updateFoodList);
    }

  return (
    <div>
        <AddFoodForm onAddFood={handleAddFood} />
        <ul className='food-list-main'>

        {foods.map(food => (
            <FoodBox key={food.id} food={food} onDelete={() => handleDelete(food.id)} />
        ))}
        </ul>
    </div>
  )
}

export default FoodList
