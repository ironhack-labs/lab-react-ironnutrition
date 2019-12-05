import React from 'react'

export default function FoodBox(props) {
    return (
        <div id="vista">
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img  id="imgfood" src={props.image} alt="FoodImage"/>
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
                            onChange={props.handleInput}
                            className="input"
                            type="number" 
                            value={props.quantity}
                            name={props.id}
                        />
                        </div>
                        <div className="control">
                        <button onClick={props.addSomeFood} className="button is-info" name={props.id}>
                            +
                        </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        </div>
    )
}
