import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';


  // Iteration 4
    function AddFoodForm(props) {

        const [name, setName] = useState("");
        const [image, setImage] = useState("");
        const [calories, setCalories] = useState("");
        const [servings, setServings] = useState("");


        const handleNameInput = e => setTName(e.target.value);
 
        const handleImageInput = e => setImage(e.target.value);
        
        const handleCaloriesInput = e => setCalories(e.target.value);
        
        const handleServingssInput = e => setServings(e.target.checked);

        const handleSubmit = (e) => {
            e.preventDefault();
            const addFoodForm = { 
              name, 
              image,
              calories,
              servings
            };

            props.AddFoodForm(addFoodForm);

        
        setName('');
        setImage('');
        setCalories('');
        setServings('');

        }



    return (handleServingssInput
      
        <Divider>Add Food Entry</Divider>

        <form onSubmit={handleSubmit}>
  
        <label>Name</label>
        <Input value={name} type="text" name="name" onChange={handleNameInput} />
  
        <label>Image</label>
        <Input value={image} type="text" name="image" onChange={handleImageInput} />
  
        <label>Calories</label>
        <Input value={calories} type="number" name="calories" onChange={handleCaloriesInput} />
  
        <label>Servings</label>
        <Input value={servings} type="number" name="servings" onChange={handleServingssInput} />
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;