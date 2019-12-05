import React from 'react';
 
function FoodBox (props) {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={props.image} alt="Food"/>
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
                        onChange={props.handleQuantity}
                        name="quantity"
                        className="input"
                        type="number"
                        //value={props.quantity} 
                    />
                    </div>
                    <div className="control">
                    <button onClick={() => props.addToList(props.index)} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    );
};

export default FoodBox;