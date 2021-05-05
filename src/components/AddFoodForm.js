import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const AddFoodForm = ({ isHidden, addFoodItem }) => {
    const initialState = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    };
    
    const [food, setFood] = useState(initialState);

    const hiddenForm = isHidden ? 'is-hidden' : '';

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFood({ ...food, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addFoodItem(food);
        setFood(initialState);
    }

    return (
        <form className={hiddenForm} onSubmit={handleFormSubmit}>
            <div className="column my-4">
                <label htmlFor="name">Name</label>
                <input className='input is-primary mb-2' type="text" name="name" value={food.name} onChange={handleInput} />

                <label htmlFor="calories">Calories</label>
                <input className='input is-primary mb-2' type="number" name="calories" value={food.calories} onChange={handleInput} />

                <label htmlFor="image">Image</label>
                <input className='input is-primary mb-2' type="text" name="image" value={food.image} onChange={handleInput} />

                <button className='button is-primary my-4'>+</button>
            </div>
        </form>
    );
};

export default AddFoodForm;