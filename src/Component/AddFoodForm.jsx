import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const {addFood}=props

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newFood= {
            name,
            image,
            calories,
            servings
        };
        //console.log(newFood)
        addFood(newFood)

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    } 

 


    return (
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
  
        <label>Image</label>
        <Input value={image} type="url" onChange={(e) => setImage(e.target.value)}/>
  
        <label>Calories</label>
        <Input value={calories} type="Number" onChange={(e) => setCalories(e.target.value)}/>
  
        <label>Servings</label>
        <Input value={servings} type="Number" onChange={(e) => setServings(e.target.value)}/>
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;
  