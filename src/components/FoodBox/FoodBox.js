import React, { useState } from 'react';
import './FoodBox.css';

const FoodBox = ({ name, calories, image }) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = event => {
    const { value } = event.target;
    setQuantity(value);
  }
  
  const handleClick = event => {
    
  }

  return (
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
              <small>{calories}</small>
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
                className="button is-info"
                onClick={handleClick}
                >+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
