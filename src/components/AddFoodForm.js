import { useState } from 'react';

export default function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const quantity = 0

  const handleNameInput = e => setName(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleImageInput = e => setImage(e.target.value);
  
  const handleSubmit = e => {
      e.preventDefault();
        const newFood = {name, calories, image, quantity}
        
        props.addNewFood(newFood)
        props.setShowForm(false)

        setName("");
        setCalories(0);
        setImage("");
  };
 
  return (
    <div className="AddFoodForm">
      <h4>Add Food Here</h4>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput}    
            />

        <label>Calories: </label>
        <input 
            type="number"  
            name="calories" 
            value={calories} 
            onChange={handleCaloriesInput} 
            />

        <label>Image: </label>
        <input 
            type="text" 
            name="image" 
            value={image}
            onChange={handleImageInput} 
            />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}
