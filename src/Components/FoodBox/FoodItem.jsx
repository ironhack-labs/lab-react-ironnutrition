import React, { useState } from "react"


function  FoodItem({name, image, calories, addItem, quantity, id}){
    
    const [qty, setQty] = useState(quantity)
    
    const handleChange = (event) => {
        setQty(event.target.value) 
    }
    return (
        
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image}
                        alt={name}/>
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
                            <input className="input" type="number" 
                            value={qty}
                            onChange={handleChange}
                            min={1} 
                            name="quantity"
                            id="quantity"/>
                        </div>
                        <div className="control">
                            <button className="button is-info"
                            onClick={() => addItem({
                                name,
                                calories,
                                id,
                                quantity: qty
                            })}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    
    )

}

export default FoodItem