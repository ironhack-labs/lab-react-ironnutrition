import React, {useState} from "react"

function FoodBox(props) {
    const [countQty, setcountQty] = useState(1)
    return (
        <>
            {props.foodData.map((food,index) => {
                return (
                    <article className="media" key={index}>
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{food.name}</strong> <br />
                                    <small>{food.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={food.quantity} onChange={(e) => { setcountQty(e.target.value) }} />
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </>

    )
}

export default FoodBox