import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"
import FoodForm from "./components/FoodForm"
import SearchBar from "./components/SearchBar"
import TodaysFoods from "./components/TodaysFoods"

function App() {

  const [foodState, updateFoodState] = useState(foods);
  const [isEditMode, toggleEditMode] = useState(false)

  function addFood (newFood) {
    const updatedFood = [ newFood, ...foodState ]
    updateFoodState(updatedFood)
  }

  function searchFunction (input) {
    if(input){
      let inputLower = input.toLowerCase();
      let filteredState = foodState.filter((item) => {
        return item.name.toLowerCase().includes(inputLower);
      })
      updateFoodState(filteredState)
    }
  }

  function handleTodaysFood(){
    updateFoodState([...foodState])
  }


  return (
    <div className="App">
      <div>
        <SearchBar searchFunction = {searchFunction}/>
      </div>
      <div>
        {isEditMode && <FoodForm addFoodHandler = {addFood} toggleEditMode = {toggleEditMode}/>}
        <button onClick = {() => toggleEditMode(!isEditMode)}>{!isEditMode ? "Add new food" : "Cancel"}</button>
      </div>
      <br></br>
      <div className = "columns">
        <div className = "column">
          {foodState.map((food) => {
          return <FoodBox food = {food} handleTodaysFood={handleTodaysFood}/>
          })}
        </div>
        <div className = "column">
          <h1>Today's foods</h1>
          <TodaysFoods foodState = {foodState} />
        </div>
      </div>
    </div>
  );
}

export default App;
