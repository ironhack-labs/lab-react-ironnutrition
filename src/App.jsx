import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import FoodSearch from "./components/FoodSearch";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);
  function handleDelete(id) {
    let newArr = foods.filter((oneFood) => id !== oneFood.id);
    setFoods(newArr);
    setFilteredFoods(newArr);
  }

  function addFood(newFood) {
    setFoods([...foods, newFood]);
    setFilteredFoods([...foods, newFood]);
  }
  function handleSearch(value) {
    if (!value) {
      setFilteredFoods(foods);
    } else {
      let searchList = filteredFoods.filter((elem) =>
        elem.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFoods(searchList);
    }
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodSearch handleSearch={handleSearch} />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "hide" : "show"}
      </button>
      {showForm ? <AddFoodForm /> : null}
      {filteredFoods.length === 0 ? (
        <p>Oops! There is no more content to show.</p>
      ) : (
        <FoodList
          addFood={addFood}
          handleDelete={handleDelete}
          foods={filteredFoods}
        />
      )}
    </div>
  );
}

export default App;
