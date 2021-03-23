import React, { Component } from 'react';

const FoodBox = ({ image, name, calories, quantity, addFood }) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} />
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
                        <input className="input" type="number" value={quantity} onChange={(e) => console.log('event', e.target.value)}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={() => addFood(name)}>+</button>
                    </div>
                </div>
                </div>
            <div>

            </div>
            </article>
        </div>
    )
}

export default FoodBox;