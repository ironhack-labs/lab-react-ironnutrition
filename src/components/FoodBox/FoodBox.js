import './FoodBox.css';
import React from 'react';

const FoodBox = (props) => {
    const {id, name, calories, image, quantity} = props.food;

    let quantityChanged = quantity;

    return(
        <div className="box">
          <article className="media">
            <div className="image">
                <img className="food-image" src={image} alt="" />
            </div>
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantityChanged}
                  onChange={() => {
                    quantityChanged += 1;
                  }}
                />
              </div>
            </div>
            <div className="media-right">
              <div className="control">
                <button
                  className="btn is-info"
                  onClick={() => props.addToTodaysFood({
                    id,
                    image,
                    name,
                    calories,
                    quantity: quantityChanged
                  })}
                >
                  +
                </button>
              </div>
            </div>
          </article>
        </div>
    )
}

export default FoodBox;