import React, { useState } from "react";

function AddFoodForm({ onAddFood }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        calories: "",
        servings: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddFood({
            name: formData.name,
            image: formData.image,
            calories: Number(formData.calories),
            servings: Number(formData.servings),
        });

        setFormData({
            name: "",
            image: "",
            calories: "",
            servings: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <h2>Add Food Entry</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Image:
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Calories:
                <input
                    type="number"
                    name="calories"
                    value={formData.calories}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Servings:
                <input
                    type="number"
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
