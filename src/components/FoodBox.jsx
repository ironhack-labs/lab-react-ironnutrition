import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({name, calories, image}) => {

  const [quantity, setQuantity] = useState(0);
  // const [userList, setUserList] = setState([]);

  const quantityHandler = (event) => setQuantity(event.target.value);

  const addToTodaysListHandler = () => {
    
  }

  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={`food-${name}`}/>
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
              <input className="input" type="number" value={quantity} onChange={quantityHandler}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={addToTodaysListHandler}>
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