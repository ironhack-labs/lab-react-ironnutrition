import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        calories: '',
        servings: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddFood(formData);

        setFormData({
            name: '',
            image: '',
            calories: '',
            servings: '',
        });
    };
    return (

        <form className="add-food-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter food name"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Image URL:</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Calories:</label>
                <input
                    type="number"
                    name="calories"
                    value={formData.calories}
                    onChange={handleChange}
                    placeholder="Enter calories"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Servings:</label>
                <input
                    type="number"
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    placeholder="Enter servings"
                    className="form-input"
                />
            </div>
            <button type="submit" className="form-button">
                Create
            </button>
        </form>
    );
};
export default AddFoodForm;