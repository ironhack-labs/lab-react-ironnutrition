import { useState } from "react";

function FoodBox({ food }) {
  const [foods, setFood] = useState([food]);

  const deleteFood = (id) => {
    console.log("Deleting food with id:", id);
    setFood((prevSelectedFood) =>
      prevSelectedFood.length > 1
       ? prevSelectedFood.filter((food) => food.id!== id)
        : []
    );
  };

  return (
    <div>
   {foods.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <img src={food.image} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings}</b> kcal
          </p>
          <button onClick={() => deleteFood(food.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FoodBox;