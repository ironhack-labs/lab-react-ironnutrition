import React from "react";

function FoodBox({ data, handleRemove }) {
  return (
    <div>
      <div key={data.id}>
        <p>{data.name}</p>
        <img style={{ width: 100 }} src={data.image} />

        <p>Calories: {data.calories}</p>
        <p>Servings {data.servings}</p>

        <p>
          <b>Total Calories: {data.servings * data.calories}</b>
          kcal
        </p>

        <button onClick={() => handleRemove(data.id)}>Delete</button>
      </div>
    </div>
  );
}

export default FoodBox;
