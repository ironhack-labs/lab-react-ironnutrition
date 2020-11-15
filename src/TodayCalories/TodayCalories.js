import React, { useState } from 'react';

function TodayCalories(props) {
  // let newarr = props.dayFood;

  //const [state, setState] = useState({ newarr });

  let total = 0;
  props.dayFood.map((e) => (total += e.foodQnt * e.foodCal));

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
      <strong>Total: {total} cal</strong>
    </div>
  );
}

export default TodayCalories;
