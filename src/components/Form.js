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
            <div className="field">
                <div className="control">
                    <label className="label" htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={state.name} onChange={handleChange} />
                </div>
            </div>
            
            <div className="field">
                <div className="control">
                    <label className="label" htmlFor="calories">Calories: </label>
                    <input type="number" name="calories" min="0" id="calories" value={state.calories} onChange={handleChange} />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label" htmlFor="image">Image: </label>
                    <input type="text" name="image" id="image" value={state.image} onChange={handleChange} />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label" htmlFor="quantity">Quantity: </label>
                    <input type="number" name="quantity" min="0" id="quantity" value={state.quantity} onChange={handleChange} />
                </div>
            </div>

            <div className="field">
                <input className="button" type="submit" value="Add" />
            </div>
        </form>
    )
}

export default Form
