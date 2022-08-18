import { useState } from 'react';
import { Divider, Input } from 'antd';


function AddFoodForm(props) {
    const { createdFood } = props;

    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [servings, setServings] = useState(0);


    const handleFoodName = (e) => { setName(e.target.value); }
    const handleFoodCalories = (e) => { setCalories(e.target.value); }
    const handleFoodImage = (e) => { setImage(e.target.value); }
    const handleFoodServings = (e) => { setServings(e.target.value); }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newFood = { name, calories, image, servings };
        createdFood(newFood);

        setName('');
        setCalories(0);
        setImage('');
        setServings(0);
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