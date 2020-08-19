import React, {useState} from 'react'

function FoodBox(props){

    const [quantity, setQuantity] = useState(1)
    
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.food.image} alt="food"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.food.name}</strong> <br />
                            <small>{props.food.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity}></input>
                        </div>
                        <div className="control">
                            <button onClick={() => props.addCalories(props.id, quantity)} className="button is-info">
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