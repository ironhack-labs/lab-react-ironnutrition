import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [addFood, setAddFood] = useState(false);
  function handleRemoveFood(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }
  function handleAddFood(newFood) {
    setFoods([...foods, newFood]);
  }
  // SEARCH
  const [search, setSearch] = useState("");
  const ResultSearch =
    search !== ""
      ? foods.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
      : foods;
  return (
    <div className="App ">
      <h1>Food List</h1>
      <button
        className="btn btn-outline-primary mb-3"
        onClick={() => setAddFood(!addFood)}
      >
        Add new Food
      </button>
      <div className="d-flex form-home justify-content-center mb-3">
        <input
          className="form-control me-2 mb-1"
          style={{ width: "300px" }}
          type="text"
          placeholder="Search First Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {addFood && <AddFoodForm onCreate={handleAddFood} />}
      {ResultSearch.length > 0 ? (
        <div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
          {ResultSearch.map((food) => (
            <FoodBox
              key={`${food.id}${food.name}`}
              food={food}
              removeFood={handleRemoveFood}
            />
          ))}
        </div>
      ) : (
        <img
          src="https://www.pdsigns.ie/contentFiles/productImages/Large/SSA18.jpg"
          className=""
          style={{ width: "300px" }}
          alt="No Food find"
        />
      )}
    </div>
  );
}

export default App;
