import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState("");

  const handleDelete = (event) => {
    const { value: foodId } = event.currentTarget;

    setFoods(foods.filter((food) => food.id !== foodId));
  };

  const handleAdd = (food) => {
    const newFood = {
      ...food,
      id: uuidv4(),
    };

    setFoods([newFood, ...foods]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredFoods = search
    ? foods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    : foods;

  return (
    <div>
      <AddFoodForm onAdd={handleAdd} />

      <div className="search-container">
        <input
          value={search}
          onChange={handleSearch}
          autoComplete="off"
          placeholder="Type the item's name you are searching for"
        />
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodBox key={food.id} food={food} onDelete={handleDelete} />
          ))
        ) : (
          <p>Oops! There is no more content to show.</p>
        )}
      </div>
    </div>
  );
};

export default FoodList;
