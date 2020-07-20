import React from 'react'
import foods from "../../foods.json"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Form.css"

function Form() {
    const { push } = useHistory()
    const initialState = {
        foods: foods,
        form: false,
        newFood: {
          name: '',
          calories: '',
          image: '',
          quantity: 0,
        },
      };
      const [state, setState] = useState(initialState);

     const  handleInput = (event) => {
        setState({
            ...state,
            newFood: {
              ...state.newFood,
              [event.target.name]: event.target.value,
            },
          })
      }
     const  handleSubmit = (event) => {
      event.target.checkValidity()
      event.preventDefault()
      const newFoodList = [...state.foods];
      newFoodList.push(state.newFood);
      setState({
        foods: newFoodList,
        newFood: {
          name: '',
          calories: '',
          image: '',
          quantity: 0,
      } 
     
         }) 
         push('/');
            }

    return (
        <div className="formDiv">
            <form key="form" >
             
             <label className='label'>Name:</label>
             <input className='input' onChange={handleInput} type="text" name='name'   />
             
             <label className='label'>Number of calories:</label>
             <input className='input' onChange={handleInput} type="number" name='calories'  />
             
             
             
             <label className='label'>Image:</label>
             <input className='input' onChange={handleInput} type="text" name='image'     />
             
             <button onSubmit={handleSubmit} className="button is-info" type='submit'>Submit</button>
             
             </form>
        </div>
    )
}

export default Form

