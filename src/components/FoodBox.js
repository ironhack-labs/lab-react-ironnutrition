import { React, useState } from 'react'

const FoodBox = props => {
    const [ quantity, setQuantity ] = useState(props.quantity);
    const [ calories, setCalories ] = useState(props.calories);

    const handleChange = e => {
        const { value } = e.target
        const multiplier = value > 0 ? value : 1

        setQuantity(value)
        setCalories(props.calories * multiplier)
    }

    const sendToCart = e => {
        const foodToAdd = {
            name: props.name,
            calories: props.calories,
            quantity
        }
        
        if (quantity > 0) props.addToCart(foodToAdd)
    }

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.image} alt={props.name} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.name}</strong> <br />
                        <small>{calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={quantity} min="0" onChange={e => handleChange(e)}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={sendToCart}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;