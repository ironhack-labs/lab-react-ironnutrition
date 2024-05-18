import { useState } from "react";


function AddFoodForm({ onAddFood }) {
    const [formState, setFormState] = useState({
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAddFood({
        ...formState,
        id: Date.now(), // Add a unique id
        calories: Number(formState.calories), // Ensure calories is a number
        servings: Number(formState.servings), // Ensure servings is a number
      });
      setFormState({
        name: '',
        image: '',
        calories: '',
        servings: ''
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formState.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Image</label>
          <input 
            type="text" 
            name="image" 
            value={formState.image} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Calories</label>
          <input 
            type="number" 
            name="calories" 
            value={formState.calories} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Servings</label>
          <input 
            type="number" 
            name="servings" 
            value={formState.servings} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;