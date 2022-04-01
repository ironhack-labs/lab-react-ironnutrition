import React from 'react';

const TodaysFood = ({ menu, deleteFood }) => {

  const calculateTotalCalories = () => {
    return menu.reduce((acc, food) => {
      acc += (food.calories * food.quantity)
      return acc
    }, 0)
  }

  return (
    <div className="my-5 mx-2">
      <div className="content box">
        <ul>
          {menu.map(food => {
            return (
              <li key={food.id} className="has-text-left">
                {food.quantity} {food.name} = {food.calories * food.quantity} calories
                <i
                  className="fas fa-times has-text-danger is-clickable ml-3"
                  onClick={() => deleteFood(food.id)}
                ></i>
              </li>
            )
          })}
        </ul>
        <div>
          <h2 className="subtitle">Total calories = {calculateTotalCalories()} calories</h2>
        </div>
      </div>
    </div>
  );
};

export default TodaysFood;