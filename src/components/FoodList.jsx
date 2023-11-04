import { React, useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";

function FoodList(){
    const [food, setFood] = useState([...foodsJson]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
  
    const handleDelete = (id) => {
      const updatedList = food.filter(dish => dish.id !== id);
      setFood(updatedList);
    }
  
    const handleCreate = (e) => {
      e.preventDefault();
  
      const newDish = {
        id: food.length + 1,
        name: name,
        image: image,
        calories: calories,
        servings: servings
      }
  
      setFood([...food, newDish]);
  
      setName("");
      setImage("");
      setCalories("");
      setServings("");
    }
  
    return (
      <div className="App">
        <AddFood handleCreate={handleCreate} setName={setName} setImage={setImage} setCalories={setCalories} setServings={setServings}/>
        <FoodBox food={food} handleDelete={handleDelete} />
      </div>
    );
}

export default FoodList