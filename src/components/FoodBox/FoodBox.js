import React from 'react'
import './FoodBox.css'


const FoodBox = ({image, name, calories, quantity}) => {
    return (
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
                        <small>{calories}</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={quantity} />
                        {/* DUDA: Como renderizar quantity si FoodBox no es un componente de clase */}
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            +
                    </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FoodBox