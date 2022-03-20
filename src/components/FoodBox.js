// jshint esversion:9

import React from "react";
import { useState } from "react";

export const FoodBox = ({food, addSelectedFood}) => {

    const [quantity, setQuantity] = useState(1);
    
    
    const handleSelectedFood = () => {
        //lifted up function
        addSelectedFood({...food, quantity: quantity});
    };

    return (
        <div key={food.name} className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} alt={food.name}/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" min={1} onChange={(e)=> setQuantity(e.target.value)} value={quantity} />
                        </div>
                        <div className="control">
                        <button onClick={handleSelectedFood} className="button is-info" >
                            +
                        </button>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
}