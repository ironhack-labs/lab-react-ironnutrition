
import { useState } from 'react';

function AddFoodForm({ createFood }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleImage = (event) => {
        setImage(event.target.value);
    }
    const handleCalories = (event) => {
        setCalories(event.target.value);
    }
    const handleServing = (event) => {
        setServings(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newFood = {name, image, calories, servings};
        createFood(newFood);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    };


  return (
    <div>
        <h4>Add new Food</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName} />

            <label htmlFor="image">Image</label>
            <input type="text" value={image} onChange={handleImage} />

            <label htmlFor="calories">Calories</label>
            <input type="text" value={calories} onChange={handleCalories} />

            <label htmlFor="serving">Servings</label>
            <input type="text" value={servings} onChange={handleServing} />

            <button>Create Food</button>
        </form>
    </div>
  )
}

export default AddFoodForm