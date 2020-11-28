import React, {useState} from 'react';
import './FoodBox.css';

const FoodBox = ({foodObject, addNewFood}) => {
  const [quantityState, setQuantity] = useState(1)

  const addFoodTodaysFood = () => {
    
    addNewFood({
      name: foodObject.name,
      calories: foodObject.calories,
      quantity: quantityState
    })
  }

  const handleQuantityChange = (event) => {
    const inputValue = event.target.value;
    setQuantity(parseInt(inputValue))
  }

  return (
     <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foodObject.image} alt={foodObject.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foodObject.name}</strong> <br />
              <small>{foodObject.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" onChange={handleQuantityChange} value={quantityState} />
            </div>
            <div className="control">
              <button onClick={addFoodTodaysFood} className="button is-info">
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