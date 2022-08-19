
import React from 'react';
import { useState } from 'react';


function AddFoodForm (props) {
    const { createFood } = props;

    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const [totalCalories, setTotalCalories] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);
    const handleTotalCalories = (e) => setTotalCalories(e.target.checked);

    const handleSubmit = (e) => {
    
        e.preventDefault();
    
        const newFood = { title, calories, servings, totalCalories };
        createFood(newFood);
    
    
        setTitle('');
        setCalories('');
        setServings('');
        setTotalCalories('');
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
          
            <input type="text" name="title" value={title} onChange={handleTitle} />
    
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











