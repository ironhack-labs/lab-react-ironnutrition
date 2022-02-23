import { useState } from 'react';
import React from 'react';

function AddFood(props) {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');

    const handleNameInput = e => setName(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleImageInput = e => setImage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.addNewFood({name, calories, image});
        setName('');
        setCalories(0);
        setImage('');
    }


    return (
        <div className='AddFood'>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameInput} 
                />
                <label>Calories:</label>
                <input
                    type="number"
                    name="calories"
                    value={calories}
                    onChange={handleCaloriesInput}
                />
                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={handleImageInput}
                />
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}

export default AddFood