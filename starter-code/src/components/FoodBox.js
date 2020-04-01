import React from 'react'

export const FoodBox = (props) => {
    return (
        <div className="box">
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={props.children.image ? props.children.image : 'images/default.png'} alt={`img-${props.children.name}`}/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{props.children.name}</strong> <br />
                    <small>{props.children.calories} cal</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                    <input className="input" type="number" defaultValue={props.children.quantity} />
                </div>
                <div className="control">
                    <button className="button is-info">
                    +
                    </button>
                </div>
                </div>
            </div>
            </article>
        </div>
    )
}
