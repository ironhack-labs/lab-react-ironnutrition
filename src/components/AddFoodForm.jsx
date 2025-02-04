import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {

const [food, setFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 1,
});


const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
    ...prevFood,
    [name]: value,
    }));
};


const handleSubmit = (e) => {
    e.preventDefault();

    if (!food.name || !food.image || food.calories <= 0 || food.servings <= 0) {
    alert("Please fill in all fields with valid values.");
    return;
    }


    onAddFood({ ...food });


    setFood({ name: "", image: "", calories: 0, servings: 1 });
};

return (
    <form onSubmit={handleSubmit}>
    <h2>Add New Food</h2>
    <label>
        Name:
        <input
        type="text"
        name="name"
        value={food.name}
        onChange={handleChange}
        placeholder="Enter food name"
        />
    </label>
    <br />
    <label>
        Image URL:
        <input
        type="text"
        name="image"
        value={food.image}
        onChange={handleChange}
        placeholder="Enter image URL"
        />
    </label>
    <br />
    <label>
        Calories:
        <input
        type="number"
        name="calories"
        value={food.calories}
        onChange={handleChange}
        placeholder="Enter calories"
        />
    </label>
    <br />
    <label>
        Servings:
        <input
        type="number"
        name="servings"
        value={food.servings}
        onChange={handleChange}
        placeholder="Enter servings"
        />
    </label>
    <br />
    <button type="submit">Create</button>
    </form>
);
};

export default AddFoodForm;