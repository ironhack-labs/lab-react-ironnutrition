import React, { useState } from 'react';

const Product = props => {

    const initialState = {
        name: props.name,
        calories: props.calories,
        quantity: 1
    }

    const [state, setState] = useState(initialState)

    const resetState = () => {
        setState(state => (
            initialState
        ))
    }

    const handleChange = ({target}) => {
        const { value } = target
        setState(state => ({
            ...state,
            quantity: value
        }))
    }

    const handleAddButton = event => {
        event.preventDefault()
        props.addToTodaysFood(state)
        resetState()
    }

    return (
        <div className="box">
            <article key={props.name} className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={props.image} alt="product" />
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
                    <input className="input" type="number" value={state.quantity} onChange={handleChange} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={handleAddButton}>+</button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}

export default Product;
