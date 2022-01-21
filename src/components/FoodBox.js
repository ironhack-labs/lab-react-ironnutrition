import React, { useRef } from 'react';

const FoodBox = (props) => {
  const { food } = props;
  const numberOfFoods = useRef();
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt={props.food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                ref={numberOfFoods}
                className="input"
                type="number"
                defaultValue="1"
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() =>
                  props.addTodaysFoods(food, numberOfFoods.current.value)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
