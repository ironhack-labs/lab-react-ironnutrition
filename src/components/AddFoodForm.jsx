import React, { useState } from 'react';
import './AddFoodForm.css';

function AddFoodForm(props) {
    const {onAddFood} = props;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, image, calories, servings};
        onAddFood(newFood);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="name"><strong>Name:</strong> </label>
            <input type="text"
            id="name"
            name="name"
            placeholder='Food name'
            value={name}
            onChange={(e) => setName(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="image"><strong>Picture:</strong> </label>
            <input type="text"
            id="image"
            name="image"
            placeholder='Paste URL here'
            value={image}
            onChange={(e) => setImage(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="calories"><strong>Calories:</strong> </label>
            <input type="number"
            id="calories"
            name="calories"
            placeholder='0'
            value={calories}
            onChange={(e) => setCalories(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="servings"><strong>Servings:</strong> </label>
            <input type="number"
            id="servings"
            name="servings"
            placeholder='0'
            value={servings}
            onChange={(e) => setServings(e.target.value)} />            
        </fieldset>

        <button>Submit</button>
    </form>
  )
}

export default AddFoodForm
