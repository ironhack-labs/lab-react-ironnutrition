import { useState } from "react";
import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm";

// item 1
function FoodList(props) {
    const [foods, setFoods] = useState(props.foodsJson);

    const deleteFood = (id) => {
        const newFoods = foods.filter((food) => food.id !== id);
        setFoods(newFoods);
    }
    const addFood = (newFood) => {
        const updateFoodData = [...foods, newFood];
        setFoods(updateFoodData);
    }

    return (
        <div>
            <AddFoodForm addFood={addFood} />
            {foods.map((food) => {
                return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
            })}
        </div>
    );
}

export default FoodList;