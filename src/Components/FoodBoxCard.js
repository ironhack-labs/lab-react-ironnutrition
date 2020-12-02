import React from 'react';


function FoodBoxCard (props) {

        return (
            <div className="box">
                <article className="media" key={props.foodObj.id} >
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.foodObj.image} alt=""/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.foodObj.name}</strong> <br />
                        <small>{props.foodObj.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value="1" />
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


export default FoodBoxCard