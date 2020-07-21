import React, { useState } from 'react'

function AddFood(props) {

    const newfood = {
        form: {
            name: '',
            image: '',
            calories: 0,
            quantity: 0
        },

    }

    const [addNewFood, setAddNewFood] = useState(newfood)

    const handleChange = ({ target }) => {
        setAddNewFood({
            ...addNewFood,
            form: {
                ...addNewFood.form,
                [target.name]: target.value
            }
        })
    }

    const handleSubmit = (e) => {
        setAddNewFood()
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div classNameName="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text"
                        name="name"
                        value={addNewFood.name}
                        onChange={handleChange} />
                </div>
            </div>
            <div classNameName="field">
                <label className="label">Imag Urls</label>
                <div className="control">
                    <input className="input" type="text"
                        name="image"
                        value={addNewFood.image}
                        onChange={handleChange} />
                </div>
            </div>
            <div classNameName="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input className="input" type="text"
                        name="calories"
                        value={addNewFood.calories}
                        onChange={handleChange} />
                </div>
            </div>
            <div classNameName="field">
                <label className="label">Quantity</label>
                <div className="control">
                    <input className="input" type="number"
                        name="quantity"
                        value={addNewFood.quantity}
                        onChange={handleChange} />
                </div>
            </div>
            <button variant="primary" type="submit">Add</button>
        </form>
    )
}

export default AddFood
