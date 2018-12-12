import React from 'react';

const FoodBox =  ({name,calories,image,quantity,onAdd,arrayPos,onChangeQty}) => (
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
            <small>{calories}cal</small>
            </p>
        </div>
        </div>
        <div className="media-right">
        <div className="field has-addons">
            <div className="control">
            <input
            onChange={onChangeQty}
                className="input"
                type="number" 
                name={arrayPos}
                value={quantity}
            />
            </div>
            <div className="control">
            <button onClick={onAdd} id={name} calories={calories} quantity={quantity} className="button is-info">
                +
            </button>
            </div>
        </div>
        </div>
    </article>
    </div>
)

export default FoodBox