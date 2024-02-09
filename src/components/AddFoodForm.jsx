

import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = e => setName(e.target.value);
 
  const handleImageInput = e => setImage(e.target.value);
 
  const handleCaloriesInput = e => setCalories(e.target.value);
 
  const handleServingsInput = e => setServings(e.target.value);


  const handleSubmit = (e) => {      
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);
}
 

return (
    <div className="AddFood">
      <h4>Add a Food</h4>
  
      <form onSubmit={handleSubmit}>  
        <label>Name: </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            placeholder="name"
            onChange={handleNameInput}
        />
        
  
        <label>Image: </label>
        <input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput}
        />
  
        <label>Calories: </label>
        <input 
            type="number" 
            name="calories" 
            value={calories}
            onChange={handleCaloriesInput} 
        />
  
        <label>Servings: </label>
        <input 
            type="number" 
            name="servings" 
            value={servings} 
            onChange={handleServingsInput}
        />
        
        <button type="submit">create</button>
      </form>
    </div>
  );



}

export default AddFoodForm;
