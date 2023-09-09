import './FoodBox.css'
import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBoxList from "./FoodBoxList";

function FoodBox () {
    const [foods, setFoods] = useState(foodsJson);
    //const simulatedFood = {
       // name: "Orange",
        //calories: 85,
        //image: "https://i.imgur.com/abKGOcv.jpg",
        //servings: 1,
      //};

      const onDeleteFoodBox = (id) => {
        const newFoods = foods.filter((food) => food.id !== id);

        setFoods (newFoods)
    }

    return (
        
        
    <div className="cardContainer">
      {foods.map((food, id) => (
        <FoodBoxList key={id} food={food} onDeleteFood={() => onDeleteFoodBox (food.id)} />
      ))}
    </div>

    
        
    )
}

export default FoodBox;