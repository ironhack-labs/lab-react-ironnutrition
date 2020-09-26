import React, { useState } from 'react';
import './FoodBox.css';
import Button from './Button';
import Summatory from './Summatory';

function FoodCardDiv(props) {
    const [quantity, setQuantity] = useState(1);
    return (
        <li key={props.name} className="FoodBox">
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={props.image} alt="" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <strong>{props.name}</strong>
                            <p>
                                <br />
                                <small>{props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => props.addToMenu(props.name, props.calories, quantity)} >+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </li>
    );
};

export default FoodCardDiv;