import React from 'react';
import TodaysFoodItem from './TodaysFoodItem';

const TodaysFoods = ({foods, removeTodayFood}) => {

  return (
    <div>
      <h2>Today's foods</h2>
      <ul>
        {
          foods.map((food, index) => { 
            return (
              <div key={index} id="info-container">
                <TodaysFoodItem {...food}/>
                <img src="./Trash_Can-512.svg" onClick={() => removeTodayFood(index)} width="16px" height="auto" />
              </div>
            );
        })
        }
      </ul>
      <p>Total: {foods.length !== 0 ? foods.reduce((sumCal, food) => sumCal + (food.quantity * food.calories), 0) : 0} cal</p>
    </div>
  );
}

export default TodaysFoods;