
import React from 'react';
import { useState } from 'react';


function AddFoodForm (props) {
    const { createFood } = props;

    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const [totalCalories, setTotalCalories] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);
    const handleTotalCalories = (e) => setTotalCalories(e.target.checked);

    const handleSubmit = (e) => {
    
        e.preventDefault();
    
        const newFood = { name, calories, servings, totalCalories };
        createFood(newFood);
    
    
        setName('');
        setCalories('');
        setServings('');
        setTotalCalories('');
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
          
            <input type="text" name="name" value={name} onChange={handleName} />
    
            <label htmlFor="calories">Calories;</label>
            <input type="text" name="calories" value={calories} onChange={handleCalories} />
    
            <label htmlFor="servings">Servings:</label>
            <input type="number" name="servings" value={servings} onChange={handleServings} />
    
            <label htmlFor="totalCalories">Total Calories:</label>
            <input type="number" name="totalCalories" value={totalCalories} onChange={handleTotalCalories} />
    
            <button type="submit">Add Food Item</button>
          </form>
        </div>
      );



}  

export default AddFoodForm











