import React, { useState, useEffect } from 'react';
import './FoodBox.css';

const FoodBox = ({ name, calories, image, addToday, sumAllCalories, setCal }) => {
  const [quantity, setQuantity] = useState(0);
  
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  const handleChange = event => {
    const { value } = event.target;
    setQuantity(value);
  }
  
  const handleClick = () => {   
    if (quantity < 1) return;
    addToday(quantity, name, calories * quantity);    
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
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input 
                className="input" 
                type="number"
                min="0"
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
