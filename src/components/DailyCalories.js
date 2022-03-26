import React from 'react';

const DailyCalories = ({ calories }) => {
  return (
    <>
      {calories &&
        Object.entries(calories).map(([k, v]) => {
          if (v.quantity > 0) {
            return (
              <li key={v.name}>
                {v.quantity} x {v.name} = {v.calories} cals
              </li>
            );
          }
        })}
    </>
  );
};

export default DailyCalories;
