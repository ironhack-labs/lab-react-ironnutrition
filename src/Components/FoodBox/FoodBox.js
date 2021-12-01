import React, { useState, useEffect } from 'react'

function FoodBox({ food, addToFoodCartInfo }) {
  const [amount, setAmount] = useState(0)
  const [foodSt, setFoodSt] = useState(food)

  //Handlres :
  const handleAmountChange = (e) => {
    let amount = e.currentTarget.value;
    if (amount < 0) amount = 0
    setAmount(amount);
  }

  const handleApplyAmount = () => {
    setFoodSt({ ...foodSt, quantity: amount })
    addToFoodCartInfo(foodSt)
  }
  //
  return (
    <div key={food.name} className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{capitalizeFirstLetter(food.name)}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" onChange={handleAmountChange} type="number" value={amount} />
            </div>
            <div className="control">
              <button onClick={handleApplyAmount} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>

  )
}

export default FoodBox
//helper :
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
