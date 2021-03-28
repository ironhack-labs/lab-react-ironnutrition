
import React from "react";

const FoodBox =({name,calories,image,quantity, onChangeQuantity})=>{

    const onAddQuantity =(event) => {
        
        onChangeQuantity({name,calories,image,quantity: event.target.value})
    }

    const onClick = () => {
        onChangeQuantity({ name,calories,image, quantity: Number(quantity) + 1 });
      };


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
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={quantity} name="quantity" onChange={onAddQuantity}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={onClick}>
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