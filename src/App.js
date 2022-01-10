// import React from 'react';
// import { useState } from 'react';
import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import TodayFood from './components/TodayFood';



function App() {
  // starts with an empty array
  const [ addFood, setAddFood ] = useState([]);

  // this function fires when the btn inside <FoodBox/> component is clicked
  // takes the food and number because of -> onClick that passed 2 arguments -> btnAddFood(food, number)
  // because App.js -->  btnAddFood={handleFood}--> this refers to 'handleFood' and fires this method here in App.js
  const handleFood = (number, food) => {
    console.log('food', food)
    console.log('number', number) // string
    // the food element clicked with its properties ->name, image, calories is available
    // 'number' in the input is available here in App.js
    let newFood = {
      name: food.name,
      calories: food.calories, 
      image: food.image,
      quantity: +number
    }
    console.log(newFood)
    // when the user click to add a new item, this is 
    const ifPresent = addFood.some(item => item.name === newFood.name);
    // if the food is not present in the current array, add it to the list
    // to pass it to --> <TodayFood foodItems={addFood}/>
    if(!ifPresent) setAddFood([...addFood, newFood]);

    if(ifPresent) {
      // if it's present already in the array of food, 
      const foodPresent = addFood.find(item => item.name === newFood.name)
      // find the element to update the quantity
      newFood.quantity += foodPresent.quantity
      console.log(newFood)
      
      // remove the repeated food from the current "addFood" that contains everything
      const foodFiltered = addFood.filter(item => item.name !== newFood.name);

      console.log(foodFiltered)
      //console.log(newFood.quantity)
      // merge the new array filtered and the new item with updated quantity
      // this updated the --> addFood for the component TodayFood
      // <TodayFood foodItems={addFood}/>
      setAddFood([...foodFiltered, newFood]); 
    }
    
  }

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        {/* <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/> */}
      </div>
      <div className="columns">
        <div className="column">
          { foods.map((item, index) => {
            return (
              <FoodBox // props.food -> props.food.name, props.food.image, props.food.calories
              food={item} 
              key={index} // each child in a list need a 'key'
              btnAddFood={handleFood}// when the btn is clicked, it grabs food and number in input, and call-> handleFood here in App.js
              />
            )
            }) 
          }
        </div>
        <div className="column">
          <TodayFood foodItems={addFood}/>
        </div>
      </div>
    </div>
   
        
      
  );
}

export default App;
