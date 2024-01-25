/* eslint-disable no-unused-vars */
// Your code here
import React from "react";

function FoodBox(props) {
  console.log(props.food);

  function deleteFood(id) {
    const filteredFood = props.food.filter((element) => {
      return element.id !== id;
    });
    props.setFood(filteredFood);
  }

  return (
    <div>
      {props.food.map((element) => {
        const caloriesPerServing = element.calories * element.servings;
        return (
          <div key={element.id}>
            <p>{element.name}</p>
            <img src={element.image} alt="" style={{ height: "200px" }} />
            <p>Calories: {element.calories}</p>
            <p>Servings: {element.servings}</p>
            <p>
              <b>Total Calories: {caloriesPerServing} kcal</b>
            </p>
            <button
              onClick={() => {
                deleteFood(element.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <p></p>
    </div>
  );
}

export default FoodBox;
