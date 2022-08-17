import { Divider, Input } from 'antd';
import {useState} from 'react';

function AddFoodForm(props) {
  const { createFood } = props; 

    //We need to create state for every single input
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
  
    //We also need a handler function that will be triggered everytime we use that input
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);
  
    //This handles the submit of the whole form
    const handleSubmit = (e) => {
      //This prevents the page reloadig
      e.preventDefault();
  
      const newFood = { name, image, calories, servings };
      createFood(newFood); 
  
     // This will clear the state and therefore the values on all inputs after we submit the form
      setName('');
      setImage('');
      setCalories(0);
      setServings(0);
    };
    
    return (
        <div>
      <form onSubmit={handleSubmit} className='form'>

        <Divider>Add Food Entry</Divider>
  
        <label htmlFor='name'>Name</label>
        <Input value={name} type="text" onChange={handleName} />
  
        <label>Image</label>
        <Input value={image} type="text" onChange={handleImage} />
  
        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCalories}/>
  
        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServings} />
  
        <button type="submit">Create</button>
      </form>

     </div>
  )
}

export default AddFoodForm