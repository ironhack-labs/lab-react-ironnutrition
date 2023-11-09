import "./App.css";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import foodsJson from "./foods.json";

function App() {
    const [foods, setFoods] = useState(foodsJson);

    const deleteFood = (foodElmId) => {
        const newArray = foods.filter((elm) => elm.id !== foodElmId);
        setFoods(newArray);
    };

    return (
        <div className="App">
            <h1>LAB | React IronNutrition</h1>
            {foods.map((foodObj, index) => {
                return (
                  <FoodBox 
                    key={index}
                    food={foodObj} 
                    callbackToDelete={deleteFood} 
                />
                );
            })}
        </div>
    );
}

export default App;
