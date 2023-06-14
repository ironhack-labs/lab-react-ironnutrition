import React from "react";
import "./App.css";
import foodsJson from "./foods.json";

import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = React.useState(foodsJson);
  return (
    <>
    <FoodBox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    } } 
    />
    </>
  );
}

export default App;
