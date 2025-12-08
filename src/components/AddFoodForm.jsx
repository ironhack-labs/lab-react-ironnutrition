// Your code here
import { useState } from "react";
import "./AddFoodForm.css";

function AddFoodForm({ addFood }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            id: Math.random(),
            name,
            image,
            calories,
            servings,
        }
        addFood(newFood);
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    };
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Image URL:</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
            <label>Calories:</label>
            <input type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} />
        </div>
        <div>
            <label>Servings:</label>
            <input type="number" value={servings} onChange={(e) => setServings(Number(e.target.value))} />
        </div>
        <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;