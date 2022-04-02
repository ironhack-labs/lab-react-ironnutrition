import React from 'react';

import 'bulma/css/bulma.css';

const FoodBox = (props) => {
    const { name, calories, image, quantity } = props;
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={ image } alt={ name } />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{ name }</strong> <br />
                            <small>{ calories } cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={ quantity } onChange={ ( event ) => props.onChangeQuantityHandler(event, name) } />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={ ( event ) => props.onClickAddFoodHandler( event, name ) } >
                                +
                            </button>
                            <button className="button is-danger" onClick={ ( event ) => props.onClickRemoveFoodHandler( event, name ) } >
                                -
                            </button>
                        </div>
                    </div>   
                </div>
            </article>
        </div>
    );
};

export default FoodBox;