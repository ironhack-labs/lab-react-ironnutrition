import React from "react";

const TodayMenu = ({ selectedFoods, removeTodayFood }) => {
  const totalCalories = selectedFoods.reduce(
    (acc, food) => acc + +food.calories * +food.quantity,
    0
  );
  return (
    <div>
      <ul>
        {selectedFoods.map(({ quantity, name, calories }) => (
          <li key={`${name}-${quantity}-${calories}`}>
            <span>
              {quantity} {name} = {quantity * calories} calories
            </span>
            <button onClick={removeTodayFood(name)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <h1>Total: {totalCalories}</h1>
      </div>
    </div>
  );
};

export default TodayMenu;

// {
//   selectedFoods.map(food => (
//     <li>
//       <span>
//         {food.quantity} {food.name} = {food.quantity * food.calories} calories
//       </span>
//       <button>X</button>
//     </li>
//   ));
// }
