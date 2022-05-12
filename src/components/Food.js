import React from 'react';
import { useState } from 'react'


const Food = (props) => {

    const [quantity, setQuantity] = useState('')

    const changeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const addFood = () => {

    }

    return (

        <div className="columns">
            <div className="column">
                
                {props.foods.map( (food) => {
                    console.log(food)
                return (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt={food.name} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{food.name}</strong> <br />
                                    <small>{food.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input type="number" className="input" value={quantity} onChange={changeQuantity} />
                                </div>
                                <div className="control">
                                    <button onClick={addFood} className="button is-info">+</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                )})}
                
            </div>
            <div className="column"></div>
            <div className="column content">
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                    <li>1 Pizza = 400 cal</li>
                    <li>2 Salad = 300 cal</li>
                </ul>
                <strong>Total: 700 cal</strong>
            </div>
        </div>






    )
}

export default Food