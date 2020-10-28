import React, {useState} from 'react'

const FoodBox = (props) => {

    const [quantity, setQuantity] = useState(0)

    const handleQuantityChange = (event) => {
        let foodQuantity = event.target.value
        setQuantity(foodQuantity)
    }

    return (
        <React.Fragment>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={props.foodInfo.image} alt={`img of ${props.foodInfo.name}`}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{props.foodInfo.name}</strong>
                            <br />
                            <small>{props.foodInfo.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" placeholder="0" onChange={handleQuantityChange}/>
                            </div>
                            <div className="control">
                                <button onClick={() => {props.onTodayListAdd(props.foodInfo, quantity)}} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </React.Fragment>
    )
}

export default FoodBox