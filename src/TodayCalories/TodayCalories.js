import React, { useState } from 'react';

function TodayCalories(props) {
  //const [state, setState] = useState( props.dayFood );

  function handleClick(event) {
    const { name } = event.target;

    props.setFood({
      list: [
        props.dayFood.splice(
          props.dayFood.findIndex((food) => food.foodName === name),
          1
        ),
      ],
    });
    props.setFood({ list: props.dayFood });
  }
  return (
    <div>
      <ul>
        {props.dayFood.map((el) => (
          <li className="input is-rounded">
            <button
              name={el.foodName}
              onClick={handleClick}
              className="button is-danger is-small mr-2"
            >
              Delete
            </button>
            {el.foodQnt} {el.foodName} = {el.foodQnt * el.foodCal} cal{' '}
          </li>
        ))}
      </ul>
      <strong>
        Total:{' '}
        {props.dayFood.reduce((acc, ele) => acc + ele.foodQnt * ele.foodCal, 0)}
        cal
      </strong>
    </div>
  );
}

export default TodayCalories;
