import React from 'react';

function SelectedFoodList(props) {
  return (
    <>
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.selectedFoods.map(food => {
            return (
              <li key={food.name}>
                {food.quantity} {food.name} = {food.calories * food.quantity} cal
                <button className={food.name} onClick={(e) => props.deleteSelected(e.target.classList[0])}>x</button>
              </li>
            ) 
          })}
      </ul>
      <strong>Total: {props.selectedFoods.reduce((acc, val) => {return acc + (val.calories * val.quantity)}, 0)} cal</strong>
    </>
  );
};

export default SelectedFoodList;
