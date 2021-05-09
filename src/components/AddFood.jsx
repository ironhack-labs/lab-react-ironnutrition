import React, {useState} from 'react';
import FoodBox from './FoodBox';
import foods from '../foods.json';
import FoodForm from './FoodForm'
import SearchBar from './SearchBar';

const AddFood = () => {
   const [form, setForm] = useState(false);
   const [searching, setSearching] = useState(false);

    const [foodsState, setFoodsState] = useState(foods);
    const [filteredFoodsState, setFilteredFoodsState] = useState([]);


   const renderFormHandler = () => setForm(!form);
    
   const addFoodHandler = (newFoodItem) => {
        const foodsCopy = [...foodsState];
        foodsState.push(newFoodItem);
        setFoodsState(foodsCopy);
    }
  
    const findFoodHandler = (searchValue) => {
        const foodListCopy = [...foodsState];

        const filteredResults = foodListCopy.filter((foodItem) => {
            return foodItem.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        })
        setSearching(true);
        setFilteredFoodsState(filteredResults);

    }
    return(
        <div>

        {form && <FoodForm addFood={addFoodHandler}/>}

        <button className= 'button is-info' style={{marginBottom: '3%'}} 
        onClick= {() => renderFormHandler()}>Add Food</button>

        <SearchBar findFood = {findFoodHandler}/>
        <hr/>
        
        {searching ?  
           filteredFoodsState.map((foodItem, index) => {
            return <FoodBox key={index} {...foodItem}/>
          })
          :
        foodsState.map((foodItem, index) => {
            return <FoodBox key={index} {...foodItem}/>
          })
        }
       


        </div>
    )
}

export default AddFood;