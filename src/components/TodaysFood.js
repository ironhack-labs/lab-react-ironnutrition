import React from 'react';

function TodaysFood(props) {
  return (
    <div>
      <h1 className="is-size-1 mt-5">Today's Foods</h1>
      <ul>
        {props.foodArr.map((element) => (
          <li
            className="w-100 mb-2 is-flex is-justify-content-space-between"
            key={element.name}
          >
            {element.quantity} {element.name} ={' '}
            {element.calories * element.quantity} cal
            <button
              style={{ backgroundColor: '#F03A5F' }}
              className="delete is-medium ml-5"
              onClick={() => props.onClick(element)}
            >
              Remove
            </button>
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
