import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({id, name, quantity, calories, image, addToCart, deleteProduct}) => {
    
    const [numQuantity, setnumQuantity] = useState(quantity)
    const [numCalories, setnumCalories] = useState(calories)

    const addUnits = () => {
        setnumQuantity(numQuantity+1)
    }

    const handleCalories = () => {
        setnumCalories(calories*numQuantity)
    }

    useEffect(() => {
        handleCalories();
    }, [numQuantity])
    
    const AddProduct = () => {
        addToCart({id, name, quantity: numQuantity, calories: numCalories})
    }


    return(
        <div className="box" data-name={name}>
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
                            <small>{calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input quantityInput" type="number" value={numQuantity} onChange={() => addUnits()} />
                        </div>
                        <div className="control">
                            <button className="button is-info" data-target="quantityInput" onClick={() => AddProduct()}>+</button>
                        </div>
                        <div className="pl-5">
                        <button className="button is-danger is-light" onClick={() => deleteProduct(id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;