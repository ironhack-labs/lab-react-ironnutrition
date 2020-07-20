import React from 'react';

import 'bulma/css/bulma.css'

function FoodBox(props) {

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.image} alt='' />
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
                <div>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                name="quantity"
                            />
                        </div>
                        <div className="control">
                            <button
                                className="button is-primary"
                            >
                                +
              </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
export default FoodBox;
