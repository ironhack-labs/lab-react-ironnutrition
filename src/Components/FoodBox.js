import React from 'react';
import { useState} from "react";

function FoodBox(props) {
    const [ selectedQuantity, setSelectedQuantity] = useState("0");
    const { food, setQuantity } = props;

    function handleInputQty (inputQty) {
        setQuantity(food.name, inputQty);
    }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt="food"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" onChange={e => handleInputQty(e.target.value)} defaultValue={selectedQuantity} />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;