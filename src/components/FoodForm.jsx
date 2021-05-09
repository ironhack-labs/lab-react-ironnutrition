import React, {useState} from 'react';
import AddFood from './AddFood';

const initialState = {
    name: '',
    calories: 0,
    image: '',
}

const FoodForm = () => {

    const [formState, setFormState] = useState(initialState);

    const inputChange = (event) => {
        let {value, name, type} = event.target;

        if (type === 'number') {
            value = Number(value);
        }

        setFormState({...formState, [name]: value})

    }
  
    const formSubmit = (event) => {
        event.preventDefault();
        AddFood(formState);
        setFormState(initialState);


    }

    return(
       
        <form style={{marginBottom: '3%'}} >
          <label htmlFor='name'>Name:</label>
          <input 
          className= 'input is-rounded is-info' 
          type="text" 
          name="name" 
          value={formState.name} 
          onChange={inputChange} />
 
          <label htmlFor='calories'>Calories:</label>
          <input 
          className= 'input is-rounded is-info' 
          type="number" 
          name="calories" 
          value={formState.calories} 
          onChange={inputChange} />
          
          <label htmlFor='image'>Image:</label>
          <input 
          className= 'input is-rounded is-info' 
          type="text" 
          name="image" 
          value={formState.image} 
          onChange={inputChange}/>
          
       <button style={{marginTop: '3%'}} className='button is-light' onClick= {() => formSubmit()}>Submit</button>
        </form>
     
    )
}

export default FoodForm;