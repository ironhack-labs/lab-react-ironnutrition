import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddFoodForm = ({ onCreateFood }) => {

    const [values, setValues] = useState({
        name: '',
        image: '',
        calories: 0,
        servings: 0
    })

    const onSubmit = (event) => {
        event.preventDefault();

        onCreateFood({
            ...values,
            id: uuidv4()
        })
    }

    const onChange = (event) => {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Name of the food" value={values.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" name="image" className="form-control" id="image" placeholder="Image of the food" value={values.image} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="calories" className="form-label">Calories</label>
                    <input type="number" name="calories" className="form-control" id="calories" value={values.calories} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="servings" className="form-label">Servings</label>
                    <input type="number" name="servings" className="form-control" id="servings" value={values.servings} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default AddFoodForm;