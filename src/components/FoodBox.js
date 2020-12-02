import React, { useState } from 'react';

function FoodBox(props) {
  const [quantity, setQuantity] = useState(0);

  function handleChange(event) {
    setQuantity(event.currentTarget.value);
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt="A food" />
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
                className="input"
                type="number"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button
                onClick={(event) => {
                  const { name, calories } = props;

                  if (quantity > 0) {
                    props.addTodayFood({
                      name: name,
                      calories: calories,
                      quantity: quantity,
                    });
                  }
                }}
                className="button is-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
