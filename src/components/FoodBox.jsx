import React, { useState } from 'react';
import foods from '../foods.json'
import 'bulma/css/bulma.css'

function FoodBox(props) {
    console.log('foods : ', foods);
    const initialState = {
        foods: foods,
        name: '',
        image: '',
        calories: '',
        quantity: '',
    };
    console.log('InitialState: ', initialState);
    const { state, setState } = useState(initialState);
    console.log('State: ', state);
    const handleChange = (event) => {
        setState((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.image} alt='' />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.name}</strong> <br />
                            <small>{props.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                name="quantity"
                                value={props.quantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="control">
                            <button
                                className="button is-info"
                            >
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
