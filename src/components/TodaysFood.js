import React from 'react';

function TodaysFood(props) {
  return (
    <div>
      <h1 className="is-size-1 mt-5">Today's Foods</h1>
      <ul>
        {props.foodArr.map((element) => (
          <li key={element.name}>
            {element.quantity} {element.name} ={' '}
            {element.calories * element.quantity} cal
          </li>
        ))}
      </ul>
      <p>
        Total:{' '}
        {props.foodArr.reduce((acc, el) => acc + el.calories * el.quantity, 0)}{' '}
        cal
      </p>
    </div>
  );
}

export default TodaysFood;
