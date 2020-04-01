import React, { useState } from "react";

const FoodBox = (props) => {
  const [quantity, setQuantity] = useState(1)
  //const [calories, setCalories] = useState(calories)
  
  
    return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image} alt="foto"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.calories} kcal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
               onChange={(e) => setQuantity(e.target.value)}
                  className="input"
                  type="number" 
                  
                />
              </div>
              <div className="control">
              <button onClick= {() => props.addToList({...props, quantity: quantity})} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FoodBox;
