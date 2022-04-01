import React, { useState } from 'react';

const FoodBox = ({ id, name, image, calories, quantity, addFood }) => {
  const [qty, setQty] = useState(quantity)

  const handleSubmit = () => {
    if (qty <= 0) return

    const food = { id, name, calories, image, quantity: Number(qty) }

    addFood(food)
    setQty(0)
  }

  return (
    <div className="my-4">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={(event) => setQty(event.target.value)}
                  className="input"
                  type="number"
                  min={0}
                  value={qty}
                />
              </div>
              <div className="control">
                <button
                  onClick={handleSubmit}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FoodBox;