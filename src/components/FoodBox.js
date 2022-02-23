import React from "react";
import { useState } from "react";

function FoodBox(props) {

    const { food, selectFood } = props;

    const [quantity, setQuantity] = useState(1);

    function updateQuantity(evnt) {
        setQuantity(evnt.target.value);
    }
    
    function clickHandler(evnt) {
        food.quantity=parseInt(quantity);
        selectFood(food);
    }

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={ food.image } alt={ food.name }/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{ food.name }</strong> <br />
                            <small>{ food.calories } cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={ quantity } onChange={ updateQuantity } />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={ clickHandler }>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default FoodBox;