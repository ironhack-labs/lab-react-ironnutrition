// import React from "react";
// import foodsJson from "../foods.json";

function FoodBox(props) {
  // const [foods, setFoods] = React.useState(foodsJson);

  return (
    <>
      <div key={props.id}>
        <h2>{props.name}</h2>

        <img src={props.image} />

        <p>Calories: {props.calories}</p>
        <p>Servings {props.servings}</p>

        <p>
          <b>
            Total Calories: {props.servings} * {props.calories}{" "}
          </b>{" "}
          kcal
        </p>

        <button
          onClick={() => {
            props.deleteTheFood(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default FoodBox;
