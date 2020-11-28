import React, {useState} from 'react';
import './FoodForm.css';

const initialState = {
  name: '',
  calories: 0,
  image: '',
  quantity: 0,
}

const FoodForm = (prop) => {
  
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault();
    prop.addFood(formState);
    setFormState(initialState);
    prop.handleForm();
  }

  const handleFormChanges = (event) => {
    let input = event.target.value;
    let inputName = event.target.name;
    
    setFormState({...formState,[inputName]: input});
  }

  return (
    <form  className='formAddFood' onSubmit={handleSubmit}>
      <label htmlFor='foodName'>Name:</label>
      <input id='foodName' type='text' name='name' onChange={handleFormChanges} value={formState.name}></input>

      <label htmlFor='foodCalories'>Calories:</label>
      <input id='foodCalories' type='number' name='calories' onChange={handleFormChanges} value={formState.calories}></input>

      <label htmlFor='foodImage'>Image:</label>
      <input id='foodImage' type='text' name='image' onChange={handleFormChanges} value={formState.image}></input>

      <button className='submitButton' type='submit'>Submit</button>
    </form>
  )
};

export default FoodForm;