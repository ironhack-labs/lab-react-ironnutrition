import './FoodBox.css';
import React from 'react';

const FoodBox = (props) => {
    const {name, calories, image, quantity} = props.food;

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
                <input className="input" type="number" value={quantity} onChange={() => console.log('hola')} />
              </div>
            </div>
            <div className="media-right">
              <div className="control">
                <button className="btn is-info">
                  +
                </button>
              </div>
            </div>
          </article>
        </div>
    )
}

export default FoodBox;