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

  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFoodItem) => {
    
    const stateCopy = [...foodState];
    
    stateCopy.push(newFoodItem);
    setFoodState(stateCopy);
    toggleForm();
  };
  
  const handleFilterFoods = (searchInput) => {
    const stateCopy = [...foodState];

    // Filter through our foodState with the matching values of searchInput
    const filteredFoodList = stateCopy.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Update the food state
    setSearchState(true);
    setFilteredFoodListState(filteredFoodList);
    
    // searchState(true) ? setFoodState(filteredFoodList) : searchState(false)
  };

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
                <FoodBox key={index} food={item} />)
                )
              :
              foodState.map((item, index) => (
                <FoodBox key={index} food={item} />)
                )}
            
            {/* {foodState.map((item, index) => (
                <FoodBox key={index} food={item} />)
                )} */}

          </div>
        </div>
        <div className="column">
          <div>
              {showForm && <AddFoodForm handleLiftFoodFromState={addFoodHandler}/>}
            <button class="button" onClick={() => toggleForm(showForm)}>Add Food</button>
          </div>
        </div>
      
      </div> 
      

    
    
    </div>
  );
}

export default App;
