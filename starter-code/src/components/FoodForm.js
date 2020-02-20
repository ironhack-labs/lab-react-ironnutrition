import React from 'react'

const FoodForm = (props) => {
    return (
        <div className="forms">
        <form onSubmit={props.addFood}>
            <input onChange={props.handleInput} name="name" placeholder="name" className="input" ></input>
            <input onChange={props.handleInput} name="calories" placeholder="calories" className="input"></input>
            <input onChange={props.handleInput} name="image" placeholder="image" className="input"></input>
            <button type='submit'>Add food</button>       
        </form>
        </div>
    )
}

export default FoodForm