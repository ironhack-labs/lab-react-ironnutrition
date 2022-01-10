// import React from 'react';
// import { useState } from 'react';
import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import TodayFood from './components/TodayFood';
import SearchBar from './components/SearchBar';

function App() {
  // starts with an empty array
  const [ addFood, setAddFood ] = useState([]);
  // search bar
  // default value is all the foods from foods.json--> useState(foods) 
  // if there is onChange on Search bar, it's going to update only with the filter value
  // and render <FoodBox /> with the input value
  const [ foodToDisplay, setFoodToDisplay ] = useState(foods);

  // this function fires when the btn inside <FoodBox/> component is clicked
  // takes the food and number because of -> onClick that passed 2 arguments -> btnAddFood(food, number)
  // because App.js -->  btnAddFood={handleAddFood}--> this refers to 'handleAddFood' and fires this method here in App.js
  const handleAddFood = (number, food) => {
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

  // when in <TodayFood /> component the 'delete' button is clicked:
  // 1 - it's going to pass the 'item' or food from child to the parent -> from <TodayFood/> to App.js
  // 2 - Here, in App.js, the btnRemoveFood --> triggers this function {handleRemoveFood}
  const handleRemoveFood = (food) => {
    console.log(food);
    // to remove an item, we make a filter to 'addFood'
    console.log(addFood)
    const foodAfterRemovedItem = addFood.filter(item => item.name !== food.name)
    console.log(foodAfterRemovedItem)
    // update state without the removed food
    setAddFood(foodAfterRemovedItem);
  }

  const handleSearchBar = (event) => {
    const inputToCompare =  (event.target.value).toLocaleLowerCase();
    const searchItem = foods.filter(item => item.name.toLocaleLowerCase().includes(inputToCompare))
    console.log(searchItem)
    setFoodToDisplay(searchItem);
  }

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
      <SearchBar inputSearchBar={handleSearchBar}/>
      </div>
      <div className="columns">
        <div className="column">
          { // initial value is --> 'foods' from foods.json
            // if there is typing inside the Search bar, this value will change
            // because we update the useState with --> setFoodToDisplay
            foodToDisplay.map((item, index) => {
            return (
              <FoodBox // props.food -> props.food.name, props.food.image, props.food.calories
              food={item} 
              key={index} // each child in a list need a 'key'
              btnAddFood={handleAddFood}// when the btn is clicked, it grabs food and number in input, and call-> handleAddFood here in App.js
              />
            )
            }) 
          }
        </div>
        <div className="column">
          <TodayFood foodItems={addFood} btnRemoveFood={handleRemoveFood}/>
        </div>
      </div>
    </div>
  );
}

export default App;
