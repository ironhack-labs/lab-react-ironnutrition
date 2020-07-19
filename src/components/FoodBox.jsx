import React from 'react'

function FoodBox({foods}) {
    const allFoodCards = foods.map(food => 
        <article className="media" key={food.name}>
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
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
                <input className="input" type="number" value={food.quantity} />
                </div>
                <div className="control">
                <button className="button is-info">
                    +
                </button>
                </div>
            </div>
            </div>
        </article>
    )
    return (
        <div className="box">
            {allFoodCards}
        </div>
    )
}

export default FoodBox
