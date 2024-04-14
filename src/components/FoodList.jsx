import foodsJson from "../foods.json";
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (food) => {
    setFoods(foods.filter((e) => e.id !== food.id));
  };
  const handleCreateFood = (food) => {
    setFoods([...foods, { ...food, id: self.crypto.randomUUID() }]);
  };

  return (
    <>
      <div className="container-sm mb-5">
        <AddFoodForm onCreate={handleCreateFood} />
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {foods.map((food) => (
          <div key={food.id} className="col-6 col-sm-4">
            <FoodBox food={food} onDelete={handleDeleteFood} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodList;