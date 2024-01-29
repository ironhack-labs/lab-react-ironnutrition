
import { useState } from "react";

const AddFoodForm = ({ AddFood }) => {
    const [formFood, setformFood] = useState({name: '',image: '',calories: '',servings: '',});

    const handleChange = (ev) => {
        setformFood({
            ...formFood,
            [ev.target.name]: ev.target.value,
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        AddFood(formFood);

        setformFood({  name: '', image: '',  calories: '', servings: '',
        });
    };
    return (

        <form className="add-food-form" onSubmit={handleSubmit}>
            <h2>ADD FOOD ENTRY</h2>
            <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formFood.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Image:</label>
                <input type="text" name="image" value={formFood.image} onChange={handleChange}  placeholder="Image" className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Calories:</label>
                <input type="number"  name="calories"  value={formFood.calories} onChange={handleChange} placeholder="Calories"  className="form-input" />
            </div>

            <div className="form-group">
                <label className="form-label">Servings:</label>
                <input type="number" name="servings" value={formFood.servings} onChange={handleChange} placeholder="Servings" className="form-input" />
            </div>

            <button type="submit" className="btn btn-primary">
                Create
            </button>
        </form>
    );
};
export default AddFoodForm;