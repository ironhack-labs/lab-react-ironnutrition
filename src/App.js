import './App.css';
import React, { useState } from 'react'
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFoods from './components/SearchFoods';
import FoodList from './components/FoodList';

function App() {

  // in order to update foodsArray and cause a re-rendered we must call 'setFoodArray' (change of state = re-render)
  const [foodsArray, setFoodArray] = useState(foods);

  // This introduced to support the search function... this is what will get displayed
  const [filteredFoodArray, setFilteredFoodArray] = useState(foods)

  // We make another array to handle the "foods list"
  const [foodListArray, setFoodListArray] = useState([])

  // We are only defining this function now - we will call it later from a child component, we pass it to the child referenced in the value of a property. 
  const addFoodtoFoodArray = foodObject => setFoodArray([...foodsArray, foodObject]);

  const addFoodtoFoodListArray = foodListObject => setFoodListArray([...foodListArray, foodListObject]);

  // { LONG WAY OF WRITING THE ABOVE ONE LINE ARROW FUNCTION...
  //   ** We take a copy of our original state..
  //   const copyFoodArray = [...foodsArray, foodObject];

  //   ** Now we add our new food oject to the end of our new array
  //   copyFoodArray.push(foodObject);

  //   setFoodArray(copyFoodArray);

  //   ** Or we could do it in one line like this. 
  //   setFoodArray([...foodsArray, foodObject]);
  // }

  //Should return a new array 
  const filterFoodsByString = stringToSearch => {
    const filteredFoods = foodsArray.filter(foodElement => {
      return foodElement.name.toLowerCase().includes(stringToSearch.toLowerCase());
    });

    setFilteredFoodArray(filteredFoods)
  }
  
  return (
    <div className="App">
      {/* We are giving the child access to a function declared in the parent*/}
      <AddFood handleAddFood={addFoodtoFoodArray} />
      <SearchFoods handleSearch={filterFoodsByString} />
      <div className="body">
        {filteredFoodArray.map((foodElement, index) => {
          return <FoodBox food={foodElement} key={index} handleFoodList={addFoodtoFoodListArray} />
        })}
        <FoodList foodList={foodListArray}/>
      </div>
    </div>
  );
}

export default App;
