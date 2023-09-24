// Your code here
// import { useState } from "react";

function FoodBox(props) {
  const { food, clickToDelete } = props;
  console.log(food);
  const totalCalories = food.serving * food.calories;

  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} width={200} />
      <p>
        <b>Calories: </b>
        {food.calories}
      </p>
      <p>
        <b>Servings: </b>
        {food.servings}
      </p>
      <p>
        <b>Total Calories: </b> {totalCalories}kcal
      </p>
      <button onClick={() => clickToDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
