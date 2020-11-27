import React, { useState } from "react";



const FoodBox = (props) => {
    const [quantityState, setQuantityState] = useState(1);

    const handleQuantityChange = (event) => {
        
        const inputValue = event.target.value;
        setQuantityState( parseInt(inputValue) );

      };
    
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.food.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.food.name}</strong> <br />
                        <small>{props.food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={quantityState} onChange={handleQuantityChange}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={() => {
                    props.handleAddFood({
                      name: props.food.name,
                      calories: props.food.calories,
                    //   image: props.food.image,
                      quantity: quantityState,
                    });
                  }}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;