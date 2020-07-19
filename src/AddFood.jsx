import React from 'react'

export default function AddFood({currentFoods, setCurrentFoods}) {

    const handleChange = ({target}) => {
        setCurrentFoods( foods => {
            return {
                ...foods,
                form: {
                    ...foods.form,
                    [target.name]: target.value
                }
            }
        })
    }

    const handleSubmit = (e) => {
        setCurrentFoods( foods => {
            const newFoodtoAdd = {...foods.form}

            return {
                ...foods,
                foodList: [...foods.foodList, newFoodtoAdd]
            }
        })
        e.preventDefault()
    }

    return (
        <div className="columns is-centered">
            <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                    <input 
                        className="input"
                        type="text" 
                        name="name" 
                        placeholder="Name of the food"
                        value={currentFoods.name}
                        onChange={handleChange}    
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                    <input 
                        className="input"
                        type="text" 
                        name="image" 
                        placeholder="URL of the image"
                        value={currentFoods.image}
                        onChange={handleChange}    
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                    <input 
                        className="input"
                        type="number" 
                        name="calories" 
                        value={currentFoods.calories}
                        min="0"
                        onChange={handleChange}    
                    />
                    </div>
                </div>

                <input 
                    type="submit" 
                    className="submit button is-info" 
                    value="Save Food"/>
            </form>
        </div>
    )
}