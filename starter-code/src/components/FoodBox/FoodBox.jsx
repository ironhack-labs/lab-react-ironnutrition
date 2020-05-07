import React from "react";

export default function FoodBox(props) {
  const food = {
    name: props.name,
    calories: props.calories,
    quantity: props.quantity,
    image: props.image,
    index: props.index,
  };

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image} alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={props.quantity}
                  onChange={(e) => props.addQuantity(e, food)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => props.addFood(food)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
// selectedFoods
