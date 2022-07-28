import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newFood = {name, image, calories, servings};
    props.addFood( (prevFoods) => {
    
      return [newFood, ...prevFoods];
    });
    
    }

    return (

      <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" placeholder="enter the name" value={props.food.name} onChange={(e) => { setName(e.target.value) }}/>

      <label>Image</label>
      <Input type="text" name="image" placeholder="enter the image" value={props.food.image} onChange={(e) => { setImage(e.target.value) }}/>

      <label>Calories</label>
      <Input type="number" min={0} name="calories" placeholder="enter the calories" value={props.food.calories} onChange={(e) => { setCalories(e.target.value) }}/>

      <label>Servings</label>
      <Input type="number" min={0} name="servings" placeholder="enter the servings" value={props.food.servings} onChange={(e) => { setServings(e.target.value) }}/>

      <button type="submit">Create</button>
    </form>
     );
  }
  


export default AddFoodForm;