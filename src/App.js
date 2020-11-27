import React, { useState } from "react";
import './App.css';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './components/foodbox.js'
import AddFoodForm from './components/addFoodForm.js';
import FoodSearch from './components/FoodSearch';

function App() {
  const [foodState, setFoodState] = useState(foodList);
  const [showForm, setShowForm] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [filteredFoodList, setFilteredFoodListState] = useState([])
  const [todaysFoodList, setTodaysFoodList] = useState([])

  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFoodItem) => {
    const stateCopy = [...foodState];
    stateCopy.push(newFoodItem);
    setFoodState(stateCopy);
    toggleForm();
  };
  
  const handleFilterFoods = (searchInput) => {
    const stateCopy = [...foodState];
    const filteredFoodList = stateCopy.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchState(true);
    setFilteredFoodListState(filteredFoodList);
  };

  const handleAddFoodToTodaysList = (foodObject) => {
    
    const stateCopy = [...todaysFoodList]
    foodObject.calories *= foodObject.quantity;
    stateCopy.push(foodObject)
    
    setTodaysFoodList(stateCopy)
  };

  const handleCalculateTotalCalories = () =>
    todaysFoodList.reduce((acc, val) => acc + val.calories, 0);


  return (
    <div className="App">
      <h1 className="title is-2">IronNutrition</h1>
      <div className="searchbar-cont"> 
      <FoodSearch handleFilterSearch={handleFilterFoods} />
      <br />
      </div>

      <div className="columns">
        <div className="column">
          <div className="food-container">
            {searchState ? 
              filteredFoodList.map((item, index) => (
                <FoodBox key={index} food={item} handleAddFood={handleAddFoodToTodaysList} />)
                )
              :
              foodState.map((item, index) => (
                <FoodBox key={index} food={item} handleAddFood={handleAddFoodToTodaysList} />)
                )}
            
            

          </div>
        </div>
        <div className="column">
          <div>
              {showForm && <AddFoodForm handleLiftFoodFromState={addFoodHandler}/>}
            <button className="button" onClick={() => toggleForm(showForm)}>Add Food</button>
          </div>
          <div>
            <h2>Today's Food!</h2>
            <ul>
              {todaysFoodList.map((element, index) => (
                <li key={index}>
                  {element.quantity} {element.name} = {element.calories} cal
                </li>
              ))}
              <p>Total: {handleCalculateTotalCalories()} calories</p>
            </ul>
          </div>
        </div>
        
      
      </div> 
      

    
    
    </div>
  );
}

export default App;
