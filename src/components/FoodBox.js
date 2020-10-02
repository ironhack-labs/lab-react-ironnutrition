import React, { useState } from 'react';

// ITERATION 1 - Create FoodBox Component
// ITERATION 2 - Display food
// ITERATION 5 - Add food to Today's Food list

function FoodBox(props) {
  const { foods } = props;

  const updateQty = (event) => {
    props.addFoodToList(event.currentTarget.id, event.currentTarget.value)
  }


  // renders the food card
  return (
    <div>
      {foods.map((food, i) => (
        <div className="box" key={i}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img alt={food.name} src={food.image} />
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
                  <input className="input" type="number" id={i} value={food.quantity} onChange={updateQty} min={0} />
                </div>
                <div className="control">
                  <button className="button is-info" >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>

  )
}

export default FoodBox;