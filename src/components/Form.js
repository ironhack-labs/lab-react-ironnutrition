import React, { useState } from 'react'

const Form = props => {

    const initialState = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
    }

    const [state, setState] = useState(initialState)

    const handleChange = ({target}) => {
        const { name, value } = target
        setState(state => ({
            ...state,
            [name]: value
        }))
    }

    const resetForm = () => {
        setState(state => ({
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        }))
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        props.addProduct(state)
        resetForm()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={state.name} onChange={handleChange} />

            <label htmlFor="calories">Calories: </label>
            <input type="number" name="calories" id="calories" value={state.calories} onChange={handleChange} />

            <label htmlFor="image">Image: </label>
            <input type="text" name="image" id="image" value={state.image} onChange={handleChange} />

            <label htmlFor="quantity">Quantity: </label>
            <input type="number" name="quantity" id="quantity" value={state.quantity} onChange={handleChange} />

            <input type="submit" value="Add" />
        </form>
    )
}

export default Form
