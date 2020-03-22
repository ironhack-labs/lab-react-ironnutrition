import React, { useState } from 'react';

const FoodBox = (props) => {
  const { food } = props;
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = () => {
    setQuantity(quantity+1);
  }

  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
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
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => handleQuantity()}>
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