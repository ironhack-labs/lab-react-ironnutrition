import React from "react";
import foodsJson from "../foods.json";

function FoodBox(props) {
  const [foods, setFoods] = React.useState(foodsJson);

  return (
    <>
      {foods.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.name}</h2>

            <img src={el.image} />

            <p>Calories: {el.calories}</p>
            <p>Servings {el.servings}</p>

            <p>
              <b>
                Total Calories: {el.servings} * {el.calories}{" "}
              </b>{" "}
              kcal
            </p>

            <button>Delete</button>
          </div>
        );
      })}
      ;
    </>
  );
}

export default FoodBox;
