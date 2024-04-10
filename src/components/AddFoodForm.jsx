
import { useState } from "react";

function AddFoodForm({ className, onCreate }) {
    const [state, setState] = useState({
        foods:{
            name: '',
            image: '',
            calories: '',
            servings: ''
        }
    })

    const handleFormSubmit = (addedFood) => {
        addedFood.preventDefault();
        onCreate(foods);
        /** Es lo mismo que hacer 'reset();' */
    }

    const handleChange = (changeEvent) => {
        const { name, value } = changeEvent.currentTarget;
        setState({
            ...state,
            foods: {
                ...state.foods,
                [name]: value
            }
        })
    }

    const {foods} = state;
    return (
        <form onSubmit={handleFormSubmit}>
            {/* TITLE */}
            <div className="input-group mb-1">
                <input type='text' name='name' value={foods.name} onChange={handleChange} className='form-control' placeholder='Name'></input>
            </div>
            {/* IMAGE */}
            <div className="input-group mb-1">
                <input type='text' name='image' value={foods.image} onChange={handleChange} className='form-control' placeholder='Image'></input>
            </div>
            {/* CALORIES */}
            <div className="input-group mb-1">
                <input type='text' name='calories' value={foods.calories} onChange={handleChange} className='form-control' placeholder='Calories'></input>
            </div>
            {/* SERVINGS */}
            <div className="input-group mb-1">
                <input type='text' name='servings' value={foods.servings} onChange={handleChange} className='form-control' placeholder='Servings'></input>
            </div>
            <button>Create</button>
        </form>
    )

}

AddFoodForm.defaultProps = {
    className: '',
    onCreate: () => {}
}

export default AddFoodForm;