import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import foodsJson from "./foods.json";

function App() {
    const [foods, setFoods] = useState(foodsJson);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const deleteFood = (foodElmId) => {
        const newArray = foods.filter((elm) => elm.id !== foodElmId);
        setFoods(newArray);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        };

        const newList = [newFood, ...foods];
        setFoods(newList);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    };

    return (
        <div className="App">
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm callbackToDelete={deleteFood} />
            {foods.map((foodObj, index) => {
                return <FoodBox key={index} food={foodObj} callbackToSubmit={handleSubmit} />;
            })}
        </div>
    );
}

export default App;
