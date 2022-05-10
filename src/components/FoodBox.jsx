import React from 'react';
import { useState } from 'react';

const FoodBox = (props) => {
 
  const { name, calories, image, quantity } = props.food;
  const [quantityNumber, setQuantity] = useState(0);

  const handleButton = ()=>{
// add total calories, update quantity, make the button usable


    props.addNewFood({...props.food, 'quantity':quantityNumber})
    
  setQuantity(0)
    console.log(props.food)
    
  }
  const handleQuantityInput = (e) => {
    console.log(e.target.value)
    console.log(props.food)

    setQuantity(e.target.value);


   
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="food" />
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
              <input className="input" type="number" value={quantityNumber} onChange={handleQuantityInput} />
            </div>
            <div className="control">
              <button  onClick={handleButton} className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
