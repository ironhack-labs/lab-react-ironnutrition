import React from 'react';
import { useState } from 'react';

export default function FoodBox(props) {
  const [newQuantity, setNewQuantity] = useState(1);
  const [todaysFood, setNewTodaysFood] = useState([]);

  function calculateCal() {
    console.log(todaysFood);
    return todaysFood.reduce((ac, cv) => ac.calories + cv.calories, 0);
  }

  function onChange(event) {
    event.preventDefault();
    setNewQuantity(event.target.value);
  }

  function handleClick(e, event) {
    event.preventDefault();
    const calories = e.calories * newQuantity;
    setNewTodaysFood([...todaysFood, { name: e.name }, { calories: calories }]);
    setNewQuantity(1);
  }
  return (
    <div className="box">
      <div>
        {props.foods.map((e, id) => {
          return (
            <div key={id} className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={e.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{e.name}</strong> <br />
                      <small>{e.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        value={props.name}
                        min={1}
                        defaultValue={1}
                        onChange={onChange}
                      />
                    </div>
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={(event) => handleClick(e, event)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Today's Food</h1>
        <ul>
          {todaysFood.map((e) => {
            return (
              <li>
                {e.name} - {e.calories}
              </li>
            );
          })}
        </ul>
        <p>{calculateCal()} cal</p>
      </div>
    </div>
  );
}
