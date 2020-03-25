import React, { useState } from 'react';

export const FoodBox = ({ food }) => {

    const [quantity, setQuantity] = useState(food.quantity);

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} alt="" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{food.name}</strong>
                            <br />
                            <small>{food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input type="number" className="input" value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                        <div className="control">
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}