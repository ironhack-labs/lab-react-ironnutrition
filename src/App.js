import './App.css';
import { useState } from 'react';

import React from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';

import AddFood from './components/AddFood';
import SearchFoods from './components/SearchFoods';

function App() {
  const [foodArray, setFoodArray] = useState(foodsData);
  const [filteredFoodArray, setFilteredFoodArray] = useState(foodsData)
  const addFoodToArray = (newFoodObject) => {
    setFoodArray([...foodArray, newFoodObject]);
  };

  const [foodListArray, setFoodListArray] = useState([]);
  // make third array for iteration 5 and display them on other side of screen // make function that updates state then pass it to component as prop, into foodbox
  const filterFoodsByString = stringToSearch =>{
  const filteredFoods =  foodArray.filter(foodElement=> {
      return foodElement.name.toLowerCase().includes(stringToSearch.toLowerCase())
    })
    setFilteredFoodArray(filteredFoods);
  }


  const addFoodToListFoodArray = (newFood) => {

    const copyOfArray = [...foodListArray];

    const foundIndex=  foodListArray.findIndex(foodEl=> {
      return foodEl.name === newFood.name
    })

    if(foundIndex === -1){
      copyOfArray.push(newFood)
    }
    else{
      copyOfArray[foundIndex].quantity =  Number(copyOfArray[foundIndex].quantity) + Number(newFood.quantity)
    }


    setFoodListArray(copyOfArray);
    
  };





  return (
    <div className="App">
      <AddFood addFood={addFoodToArray} />
      <SearchFoods handleSearch={filterFoodsByString}/>
      <div style={{display:'flex'}}>
        <div style={{flex:'1'}}>
      {filteredFoodArray.map((foodElement, index) => {
      
        return <FoodBox food={foodElement} key={index} addNewFood={addFoodToListFoodArray} />;
      })}
        </div>
        <div style={{flex:'1'}}>
          <h3>Today's Food</h3>
        <ul>
        {foodListArray.map((newFoodObject)=>{
           console.log(newFoodObject)
        return(
            <li>
             {newFoodObject.quantity}   {newFoodObject.name} = {newFoodObject.calories}
              
            </li>
        )
        })}
        {/* 0 is prev */}
       <p>Total: {foodListArray.reduce((prev,curr)=>{
return prev + curr.calories * curr.quantity
        },0)}</p> 
     
        </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
