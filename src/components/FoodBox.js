import React, { useState } from 'react';

const FoodBox = (props) => {
  const initialState = {
    list: [],
    totalCalories: 0,
    quantity: 0,
    food: [],
  };
  const [todaysList, setTodaysList] = useState(initialState);
  const handleChange = (e) => {
    setTodaysList({
      ...todaysList,
      food: { name: e.target.name, quantity: e.target.value },
    });
  };
  const handleClick = (el) => {
    setTodaysList({
      ...todaysList,
      list: [...todaysList.list, todaysList.food],
      totalCalories: todaysList.totalCalories + el.calories,
    });
  };
  const todaysListItems = todaysList.list.map((el, index) => (
    <li key={index}>
      {el.quantity} {el.name} {el.calories}
    </li>
  ));

  const foodsList = props.foodList
    .filter((food) => food.name.toLowerCase().includes(props.searchParam))
    .map((el) => (
      <div key={el.name} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={el.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{el.name}</strong> <br />
                <small>{el.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name={el.name}
                  value={[el.name].quantity}
                  onChange={handleChange}
                  placeholder="1"
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => handleClick(el)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    ));
  return (
    <div className="foods-list">
      <div className="columns">
        <div className="column is-three-fifths">{foodsList}</div>
        <div className="column">
          <h2>Today's foods</h2>
          <ul>{todaysListItems}</ul>
          <p>Total: {todaysList.totalCalories} cal</p>
        </div>
      </div>
    </div>
  );
};

export default FoodBox;
