
import { Divider, Input, Button } from "antd";
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
     <Divider> <h4>Add a Food</h4></Divider>
  
      <form onSubmit={handleSubmit}>  
        <label>Name: </label>
        <Input 
            type="text" 
            name="name" 
            value={name} 
            placeholder="name"
            onChange={handleNameInput}
        />
        
  
        <label>Image: </label>
        <Input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput}
        />
  
        <label>Calories: </label>
        <Input 
            type="number" 
            name="calories" 
            value={calories}
            onChange={handleCaloriesInput} 
        />
  
        <label>Servings: </label>
        <Input 
            type="number" 
            name="servings" 
            value={servings} 
            onChange={handleServingsInput}
        />
        
        <Button type="primary" htmlType="submit">Add New Food</Button>
      </form>
    </div>
  );



}

export default AddFoodForm;
