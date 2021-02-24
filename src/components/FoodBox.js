import React from 'react'

const FoodBox = ({ image, name, calories, addQuantity }) => {

    function handleImputChange(e) {
        e.preventDefault()
    }

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
                            <input onChange={e => handleImputChange(e)} className="input" type="number" value="1" />
                        </div>
                        <div className="control">
                            <button onClick={() => addQuantity({ name })} className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox