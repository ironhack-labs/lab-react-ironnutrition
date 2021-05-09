import React, {useState} from 'react';
import FoodBox from './FoodBox';
import foods from '../foods.json';
import FoodForm from './FoodForm'

const AddFood = () => {
   const [form, setForm] = useState(false);

    const [foodsState, setFoodsState] = useState(foods);

   const renderFormHandler = () => setForm(!form);
    
   const addFoodHandler = (newFoodItem) => {
        const foodsCopy = [...foodsState];
        foodsState.push(newFoodItem);
        setFoodsState(foodsCopy);
    }
  
    return(
        <div>

        {form && <FoodForm addFood={addFoodHandler}/>}

        <button className= 'button is-info' style={{marginBottom: '3%'}} 
        onClick= {() => renderFormHandler()}>Add Food</button>

        {foodsState.map((foodItem, index) => {
            return <FoodBox key={index} {...foodItem}/>;
      
          })}
        </div>
    )
}

export default AddFood;