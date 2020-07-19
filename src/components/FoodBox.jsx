import React from 'react'

function FoodBox(props) {
    const {image, name, calories, quantity} = props.food
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt={name} />
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
                            <input 
                                id='input-quantity' 
                                name={name} 
                                className="input" 
                                type="number" 
                                value={quantity} 
                                onChange={props.handleFoodQuantity} 
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" name={name} onClick={props.handleAddFood}>
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
