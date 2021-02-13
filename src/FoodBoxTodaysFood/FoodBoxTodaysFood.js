/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function FoodBoxTodaysFood ({name,calories,image,quantity}){
    return(
    <div className="box">
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
                        <small>{calories} cal</small>
                    </p>
                </div>
            </div>
            <div className="l">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={quantity} />
                    </div>
                </div>
            </div>
        </article>
    </div>
    );
}

export default FoodBoxTodaysFood;