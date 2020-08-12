import React from 'react'

const FoodBox = ({ food }) => {
    console.log(food)
    const foodList = food.map((elem, index) => (
        <div className="box" key={index} >
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={elem.image} alt=""/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{elem.name}</strong> <br />
                            <small>{elem.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={elem.quantity} onChange/>
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
    ))
    return (
        <div className="food-list">{foodList}</div>
    )
}

export default FoodBox
