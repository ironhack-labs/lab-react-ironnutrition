import React from 'react'


function FoodBox(props) {
    return (
        <article>

                <img src={props.image} alt={props.name}/>
                <div>
                <h3>{props.name}</h3>
                <p> {props.calories} cal</p>
                </div>
                <input type='number' placeholder={props.quantity}/>
                <button onClick={()=>props.addFood(props.name)}>+</button>
        </article>
    )
}

export default FoodBox