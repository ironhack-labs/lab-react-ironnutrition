import React, { useState } from 'react'

const FoodBox = (props) => {
    const [ quantity, setQuantity ] = useState(1)

    const handleQuantity = (e) => {
        setQuantity( e.target.value )
    }

    return (
    <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={ props.image } alt={ props.name } />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{ props.name }</strong> <br />
                    <small>{ props.calories } cal</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        type="number" 
                        value={ quantity } 
                        onChange={ (e) => handleQuantity(e) }
                    />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={() => props.onClick(props.name, props.calories, quantity)}>
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