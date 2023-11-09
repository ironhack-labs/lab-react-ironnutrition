import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import foodsJson from "./foods.json";

function App() {
    const [foods, setFoods] = useState(foodsJson);

    const addFood = (newFood) => {
        const newList = [newFood, ...foods];
        setFoods(newList);
    };

    const deleteFood = (foodElmId) => {
        const newArray = foods.filter((elm) => elm.id !== foodElmId);
        setFoods(newArray);
    };

    return (
        <div className="App">
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm callbackToSubmit={addFood} />
            {foods.map((foodObj, index) => {
                return <FoodBox key={index} food={foodObj} callbackToDelete={deleteFood} />;
            })}
        </div>
    );
}

export default App;
