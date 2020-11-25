import React from 'react';

function TotalEaten(props) {
  const totalCalories = () => {
    return props.foodTotal
      .map((item) => item.calories)
      .reduce(function (a, b) {
        return a + b;
      });
  };

  return (
    <div className="totalEaten">
      <h2>Today's Food:</h2>
      <ul>
        {props.foodTotal.map((item, index) => (
          <li key={index}>
            {item.quantity} {item.name} = {item.calories}
          </li>
        ))}
      </ul>
      <p>
        <b>Total: {totalCalories()} Cal</b>
      </p>
    </div>
  );
}

export default TotalEaten;
