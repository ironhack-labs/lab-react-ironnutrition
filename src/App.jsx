import "./App.css";
import "antd/dist/antd.css";
import { useState } from "react";
import foodsData from "./foods.json";
import { FoodBox } from "./components/FoodBox";
import { AddFoodForm } from "./components/AddFoodForm";
import { Search } from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsData);

  const addFood = (food) => setFoods((foods) => [...foods, food]);
  const filterFood = (searchText) => {
    setFoods(
      foodsData.filter((f) =>
        f.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Search filterFood={filterFood} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {foods.map((f, idx) => (<FoodBox key={idx} food={f} />))}
      </div>
    </div>
  );
}

export default App;
