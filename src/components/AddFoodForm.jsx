import React from 'react'
import { Link } from 'react-router-dom'

export default function AddFoodForm({ food, setFood }) {


    const handleChange = ({ target }) => {
        setFood(el => {
            return {
                ...el,
                form: {
                    ...el.form,
                    [target.name]: target.value
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFood(el => {
            const newFood = { ...el.form }

            return {
                ...el,
                foodCollection: [...el.foodCollection, newFood]
            }
        })
    }

    return (
        <div
            className="box"
            style={{ width: '18rem' }}
        >
            <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input is-success"
                            type="text"
                            name="name"
                            placeholder="Name of the food"
                            value={food.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                        <input
                            className="input is-success"
                            type="text"
                            name="image"
                            placeholder="image URL"
                            value={food.image}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input
                            className="input is-success"
                            type="number"
                            name="calories"
                            value={food.calories}
                            min="0"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Link to='/'>
                    <input type="submit" className="button is-success" value="Add Food" />
                </Link>
            </form>
        </div>
    )
}
