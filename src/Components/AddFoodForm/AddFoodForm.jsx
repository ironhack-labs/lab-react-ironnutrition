import { useState } from 'react';
import { Divider, Input } from 'antd';


function AddFoodForm(props) {
    const { createdFood } = props;

    const [foodName, setFoodName] = useState('');
    const [foodCalories, setFoodCalories] = useState(0);
    const [foodImage, setFoodImage] = useState('');
    const [foodServings, setFoodServings] = useState(0);


    const handleFoodName = (e) => { setFoodName(e.target.value); }
    const handleFoodCalories = (e) => { setFoodCalories(e.target.value); }
    const handleFoodImage = (e) => { setFoodImage(e.target.value); }
    const handleFoodServings = (e) => { setFoodServings(e.target.value); }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newFood = { foodName, foodCalories, foodImage, foodServings };
        createdFood(newFood);

        setFoodName('');
        setFoodCalories(0);
        setFoodImage('');
        setFoodServings(0);
    }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
    
      <label htmlFor='name'>Name</label>
      <Input type="text" name='name' onChange={{handleFoodName}} />

      <label htmlFor='image'>Image</label>
        <Input type="text" name='image' onChange={{handleFoodImage}} />    

      <label htmlFor='calories'>Calories</label>
        <Input type="number" name='calories' onChange={{handleFoodCalories}} />

      <label htmlFor='servings'>Servings</label>
        <Input type="number" name='servings' onChange={{handleFoodServings}} />

      <button type="submit">Create</button>
    </form>
    
  );
}

export default AddFoodForm;