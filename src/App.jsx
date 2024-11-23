import React, { useState } from "react";
import FoodList from "./components/FoodList";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
