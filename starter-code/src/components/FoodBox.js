import React from 'react'

const FoodBox = ({ onAdd, onChangeQuantity, arrayPos, name, calories, image, quantity }) => (
    <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img width="50" src={image} alt={name} />
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
                            onChange={onChangeQuantity}
                            className="input"
                            type="number"
                            name={arrayPos}
                            value={quantity}
                        />
                    </div>
                    <div className="control">
                        <button onClick={onAdd} name={arrayPos} className="button is-info">
                            +
          </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
)

export default FoodBox
