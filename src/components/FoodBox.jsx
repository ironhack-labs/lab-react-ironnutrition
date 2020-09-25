import React from 'react';

const FoodBox = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                onChange={props.changeQuantity}
                className="input"
                type="number"
                value={
                  props.quantity[props.name] === undefined
                    ? 0
                    : props.quantity[props.name]
                }
                name={props.name}
                min="0"
              />
            </div>
            <div className="control">
              <button
                onClick={props.add}
                className="button is-info"
                name={props.name}
                id={props.calories}
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
